export default {
  namespace: 'portfolio',
  state: {
    currency: 'CNY',
    from: new Date(2019, 0, 1),
    to: new Date(2019, 3, 30),
    amount: 70350,
    updatedAt: new Date(2019, 4, 20),
    deadline: new Date(2019, 3, 30),
    income: 2300,
    balance: 70350,
    cashes: [
      { from: new Date(2019, 3, 1), to: new Date(2019, 3, 30), amount: 6612 },
      { from: new Date(2019, 0, 1), to: new Date(2019, 3, 30), amount: 758251 }
    ],
    remittances: [
      { status: '汇款完毕', date: new Date(2019, 2), amount: 6612 },
      { status: '汇款完毕', date: new Date(2019, 3), amount: 758251 }
    ],
    buildings: [
      {
        thumb: '',
        info: '北海道札幌市北区北20条',
        memo: '西投资公寓 1栋',
        addr: '北海道札幌市北区北20条西４丁目 (北24条・麻生・无町・荣町商圈）',
        renting: '4/5',
        waiting: '0/5',
        time: { from: new Date(2019, 0, 1), to: new Date(2019, 9, 1) },
        amount: 3369,
        update: new Date(2019, 4, 27)
      },
      {
        thumb: '',
        info: '北海道札幌市北区北20条',
        memo: '西投资公寓 1栋',
        addr: '北海道札幌市北区北20条西４丁目 (北24条・麻生・无町・荣町商圈）',
        renting: '4/5',
        waiting: '0/5',
        time: { from: new Date(2019, 0, 1), to: new Date(2019, 9, 1) },
        amount: 3369,
        update: new Date(2019, 4, 27)
      },
    ]
  },
  reducer: {}
};
