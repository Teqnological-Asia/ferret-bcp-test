import { currentAccountTypeSelector, mainAccountIdSelector } from "../../selectors/profileSelector";
import store from "../../store";
import { matchPath } from "../../utils";

const configMenu = () => {
  return [
    {
      id: 0,
      is_highlight: false,
      defaultName: "お客さまサポートWEB",
      items: [
        {
          id: 0,
          name: "トップページ",
          href: "/account",
          subItems: [],
          groupId: 0
        }
      ]
    },
    {
      id: 1,
      name: "資産状況",
      is_highlight: false,
      items: [
        // {
        //   id: 1,
        //   name: '口座余力',
        //   href: '/account/balance',
        //   subItems: [],
        //   groupId: 1
        // },
        {
          id: 1,
          name: "取引履歴",
          href: "/account/trade/history",
          subItems: [],
          groupId: 1
        },
        {
          id: 2,
          name: "特定口座取引明細",
          href: "/account/trade/tax",
          subItems: [],
          groupId: 1
        },
        {
          id: 3,
          name: "入出金状況",
          href: "/account/trade/cash/history",
          subItems: [],
          groupId: 1
        },
        // {
        //   id: 3,
        //   name: "入出金状況",
        //   href: "/account/payment/history",
        //   subItems: [],
        //   groupId: 1
        // },
        // {
        //   id: 4,
        //   name: "出金取消",
        //   href: "/account/payment/cancel",
        //   subItems: [
        //     "/account/payment/:id/cancel/confirm",
        //     "/account/payment/:id/cancel/complete"
        //   ],
        //   groupId: 1
        // },
        {
          id: 13,
          name: "貸株貸出状況",
          href: "/account/trade/lendingbalance",
          subItems: [],
          groupId: 1
        },
      ]
    },
    {
      id: 2,
      name: "手続き／報告書",
      is_highlight: false,
      items: [
        // {
        //   id: 5,
        //   name: "入出金",
        //   href: "/account/payment",
        //   subItems: [
        //     "/account/payment/withdrawal",
        //     "/account/payment/withdrawal/complete"
        //   ],
        //   groupId: 2
        // },
        {
          id: 8,
          name: "電子交付サービス",
          href: "/account/report/output",
          subItems: [],
          groupId: 2
        },
        {
          id: 12,
          name: "口座閉鎖",
          href: "/account/close-account",
          subItems: [],
          groupId: 2
        }
      ]
    },
    // {
    //   id: 3,
    //   name: "緊急時取引メニュー",
    //   is_highlight: true,
    //   items: [
    //     {
    //       id: 9,
    //       name: "現物株式売却",
    //       href: "/account/physical",
    //       subItems: [
    //         "/account/physical/:code/order",
    //         "/account/physical/:code/order/confirm",
    //         "/account/physical/:code/order/complete"
    //       ],
    //       groupId: 3
    //     },
    //     {
    //       id: 11,
    //       name: "注文照会",
    //       href: "/account/order",
    //       subItems: [
    //         "/account/order/:id/cancel",
    //         "/account/order/:id/cancel/complete",
    //         "/account/order/:id/detail"
    //       ],
    //       groupId: 3
    //     }
    //   ]
    // }
  ];
};

export default function conditionConfigMenu() {
  let sidebarList = configMenu();
  sidebarList = checkMarginCondition(sidebarList);
  sidebarList = checkStockLendingCondition(sidebarList);
  sidebarList = checkAccountType(sidebarList);
  return sidebarList;
}

const checkAccountType = sidebarList => {
  const state = store.getState()
  const currentAccountType = sessionStorage.getItem("currentAccountType") || currentAccountTypeSelector(state);
  const mainAccount = sessionStorage.getItem("mainAccount") || mainAccountIdSelector(state);
  if (mainAccount && currentAccountType && currentAccountType === "NORMAL") {
    const mainAccountLink = process.env[`REACT_APP_${mainAccount.toUpperCase()}_URL`];
    // Disable Trade Tax Navi
    const tradeItem = {
      ...sidebarList[1],
      items: [
        // replace Tax item
        sidebarList[1].items[0],
        {
          ...sidebarList[1].items[1],
          isSubAccount: true,
          mainAccountLink: mainAccountLink,
          helpUrl: "https://help.smartplus-sec.com/s/article/bcp-syukouza"
        },
        ...sidebarList[1].items.slice(2, sidebarList[1].items.length)
      ]
    };
    const accountItem = {
      ...sidebarList[2],
      items: [
        // replace Close Account
        sidebarList[2].items[0],
        {
          ...sidebarList[2].items[1],
          isSubAccount: false,
          mainAccountLink: mainAccountLink,
        }
      ]
    };
    return [
      sidebarList[0],
      tradeItem,
      accountItem
    ];
  }
  return sidebarList;
};

const removeRoute = (sidebarList, mainItemPos, matchRoute) => {
  const sidebarItem = sidebarList[mainItemPos];
  const items = sidebarItem.items;
  const pos = items.findIndex(item => item.href === matchRoute);
  if (pos !== -1) {
    const newItems = [
      ...items.slice(0, pos),
      ...items.slice(pos + 1, items.length)
    ];
    return [
      ...sidebarList.slice(0, mainItemPos),
      {
        ...sidebarItem,
        items: newItems
      },
      ...sidebarList.slice(mainItemPos + 1, sidebarList.length),
    ];
  }
  return sidebarList
};

const checkMarginCondition = sidebarList => {
  const marginAccountStatus = sessionStorage.getItem("marginAccountStatus");
  if (marginAccountStatus !== "2" && marginAccountStatus !== "3") {
    return removeRoute(sidebarList, sidebarList.length - 1, "/account/margin");
  }
  return sidebarList;
};

const checkStockLendingCondition = sidebarList => {
  const stockLendingStatus = sessionStorage.getItem("stockLendingStatus");
  if (stockLendingStatus !== "2" && stockLendingStatus !== "4") {
    return removeRoute(sidebarList, 1,"/account/trade/lendingbalance");
  }
  return sidebarList;
};

export function findMenuInfoByPathName(pathName) {
  let result = null;

  conditionConfigMenu().forEach(function(menu) {
    menu.items.forEach(function(item) {
      const path = pathName.replace(/\/+$/, "");
      const pathPatterns = item.subItems.concat(item.href);

      if (matchPath(pathPatterns, path)) {
        result = {
          id: item.id,
          name: item.name2 || item.name,
          group: menu
        };
      }
    });
  });

  return result;
}
