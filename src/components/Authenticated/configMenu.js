import { matchPath } from '../../utils';

export default function configMenu() {
  return [
    {
      id: 1,
      name: '資産状況',
      is_highlight: false,
      items: [
        {
          id: 1,
          name: '口座余力',
          href: '/account/balance',
          subItems: [],
          groupId: 1
        },
        {
          id: 2,
          name: '取引履歴',
          href: '/account/trade/history',
          subItems: [],
          groupId: 1
        },
        {
          id: 3,
          name: '特定口座取引明細',
          href: '/account/trade/tax',
          subItems: [],
          groupId: 1
        },
        {
          id: 4,
          name: '入出金履歴',
          href: '/account/payment/history',
          subItems: [],
          groupId: 1
        },
        {
          id: 5,
          name: '出金予定',
          href: '/account/payment/cancel',
          subItems: [
            '/account/payment/:id/cancel/confirm',
            '/account/payment/:id/cancel/complete'
          ],
          groupId: 1
        }
      ]
    },
    {
      id: 2,
      name: '手続き／報告書',
      is_highlight: false,
      items: [
        {
          id: 5,
          name: '入出金',
          href: '/account/payment',
          subItems: [
            '/account/payment/withdrawal',
            '/account/payment/withdrawal/complete'
          ],
          groupId: 2
        },
        {
          id: 6,
          name: '単元未満株式売却',
          name2: '単元未満株式売却サービス',
          href: '/account/fractional/sell',
          subItems: [
            '/account/fractional/complete',
            '/account/fractional/cancel',
            '/account/fractional/cancel/complete',
            '/account/fractional/clame'
          ],
          groupId: 2
        },
        {
          id: 7,
          name: '株式出庫',
          href: '/account/delivery',
          subItems: [
            '/account/delivery/complete',
            '/account/delivery/cancel',
            '/account/delivery/cancel/complete'
          ],
          groupId: 2
        },
        {
          id: 8,
          name: '取引報告書印刷',
          href: '/account/report/output',
          subItems: [],
          groupId: 2
        }
      ]
    },
    {
      id: 3,
      name: '緊急時取引メニュー',
      is_highlight: true,
      items: [
        {
          id: 9,
          name: '現物株式売却',
          href: '/account/physical',
          subItems: [
            '/account/physical/:code/order',
            '/account/physical/:code/order/confirm',
            '/account/physical/:code/order/complete'
          ],
          groupId: 3
        },
        {
          id: 11,
          name: '注文照会',
          href: '/account/order',
          subItems: [
            '/account/order/:id/cancel',
            '/account/order/:id/cancel/complete',
            '/account/order/:id/detail'
          ],
          groupId: 3
        }
      ]
    }
  ];
}

export function findMenuInfoByPathName(pathName) {
  let result = null;

  configMenu().forEach(function(menu) {
    menu.items.forEach(function(item) {
      const path = pathName.replace(/\/+$/, '');
      const pathPatterns = item.subItems.concat(item.href);

      if (matchPath(pathPatterns, path)) {
        result = {
          id: item.id,
          name: item.name2 || item.name,
          group: menu
        };
      }
    })
  })

  return result;
}
