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
          name: '特定口座譲渡益税／配当',
          href: '/account/trade/tax',
          subItems: [],
          groupId: 1
        },
        {
          id: 4,
          name: '入出金履歴',
          href: '/account/payment/history',
          subItems: [
            '/account/payment/cancel',
            '/account/payment/cancel/complete'
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
            '/account/payment/deposit/',
            '/account/payment/deposit/confirm',
            '/account/payment/deposit/complete',
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
            '/account/fractional/cancel/complete'
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
      name: '障害時取引メニュー',
      is_highlight: true,
      items: [
        {
          id: 9,
          name: '現物株式売却',
          href: '/account/physical',
          subItems: [
            '/account/physical/order',
            '/account/physical/order/confirm',
            '/account/physical/order/complete'
          ],
          groupId: 3
        },
        {
          id: 10,
          name: '信用決済',
          href: '/account/margin',
          subItems: [
            '/account/margin/select',
            '/account/margin/order',
            '/account/margin/order/confirm',
            '/account/margin/order/complete',
            '/account/margin/receipt',
            '/account/margin/receipt/complete',
            '/account/margin/delivery',
            '/account/margin/delivery/complete'
          ],
          groupId: 3
        },
        {
          id: 11,
          name: '注文照会',
          href: '/account/order',
          subItems: [
            '/account/order/cancel',
            '/account/order/cancel/complete',
            '/account/order/detail'
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
      if (item.subItems.concat(item.href).includes(pathName.replace(/\/+$/, ''))) {
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