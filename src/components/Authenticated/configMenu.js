export default function configMenu() {
  return [
    {
      id: 1,
      name: '資産状況',
      is_highlight: false,
      items: [
        {
          name: '口座余力',
          href: '/account/balance',
          subItems: []
        },
        {
          name: '取引履歴',
          href: '/account/trade/history',
          subItems: []
        },
        {
          name: '特定口座譲渡益税/配当',
          href: '/account/trade/tax',
          subItems: []
        },
        {
          name: '入出金履歴',
          href: '/account/payment/history',
          subItems: [
            '/account/payment/cancel',
            '/account/payment/cancel/complete'
          ]
        }
      ]
    },
    {
      name: '手続き／報告書',
      is_highlight: false,
      items: [
        {
          name: '入出金',
          href: '/account/payment',
          subItems: [
            '/account/payment/deposit/',
            '/account/payment/deposit/confirm',
            '/account/payment/deposit/complete',
            '/account/payment/withdrawal',
            '/account/payment/withdrawal/complete'
          ]
        },
        {
          name: '単元未満株式売却',
          href: '/account/fractional/sell',
          subItems: [
            '/account/fractional/complete',
            '/account/fractional/cancel',
            '/account/fractional/cancel/complete'
          ]
        },
        {
          name: '株式出庫',
          href: '/account/delivery',
          subItems: [
            '/account/delivery/complete',
            '/account/delivery/cancel',
            '/account/delivery/cancel/complete'
          ]
        },
        {
          name: '取引報告書印刷',
          href: '/account/report/output',
          subItems: []
        },
      ]
    },
    {
      name: '障害時取引メニュー',
      is_highlight: true,
      items: [
        {
          name: '現物株式売却',
          href: '/account/physical',
          subItems: [
            '/account/physical/order',
            '/account/physical/order/confirm',
            '/account/physical/order/complete'
          ]
        },
        {
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
          ]
        },
        {
          name: '注文照会',
          href: '/account/order',
          subItems: [
            '/account/order/cancel',
            '/account/order/cancel/complete',
            '/account/order/detail'
          ]
        }
      ]
    }
  ];
}