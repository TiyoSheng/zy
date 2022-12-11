export const devices = [{
  id: '1001',
  name: 'CKQ6450全功能数控车床',
  ip: '192.168.1.1',
  status: '加工',
  runTime: 0,
  freeTime: 0,
  bugTime: 0,
  stopTime: 0,
  progress: 0,
  er: 0,
  ex: 0,
  oee: 0,
  quality: 0,
  remark: ''
}, {
  id: '1002',
  name: '五轴加工中心MCV-L850-5',
  ip: '192.168.1.2',
  status: '加工',
  runTime: 0,
  freeTime: 0,
  bugTime: 0,
  stopTime: 0,
  progress: 0,
  er: 0,
  ex: 0,
  oee: 0,
  quality: 0,
  remark: ''
}, {
  id: '1003',
  name: 'CKY400G数控车床',
  ip: '192.168.1.3',
  status: '加工',
  runTime: 0,
  freeTime: 0,
  bugTime: 0,
  stopTime: 0,
  progress: 0,
  er: 0,
  ex: 0,
  oee: 0,
  quality: 0,
  remark: ''
}, {
  id: '1004',
  name: 'KVC1050N立式加工中心',
  ip: '192.168.1.4',
  status: '故障',
  runTime: 0,
  freeTime: 0,
  bugTime: 0,
  stopTime: 0,
  progress: 0,
  er: 0,
  ex: 0,
  oee: 0,
  quality: 0,
  remark: ''
}, {
  id: '1005',
  name: 'MCV-L650加工中心',
  ip: '192.168.1.5',
  status: '关机',
  runTime: 0,
  freeTime: 0,
  bugTime: 0,
  stopTime: 0,
  progress: 0,
  er: 0,
  ex: 0,
  oee: 0,
  quality: 0,
  remark: ''
}]

export const status = [{
  key: '加工',
  value: '加工'
}, {
  key: '空闲',
  value: '空闲'
}, {
  key: '关机',
  value: '关机'
}, {
  key: '故障',
  value: '故障'
}]

export const users = [{
  id: '0001',
  name: 'Admin',
  time: '2022-5-29 14:00:52'
}, {
  id: '0002',
  name: 'Tom',
  time: '2022-5-29 14:00:52'
}, {
  id: '0003',
  name: 'Hong',
  time: '2022-5-29 14:00:52'
}]

export const errorList = [{
  index: '1',
  id: 'SW0100',
  desc: '参数写入开关处于打开',
  solution: '在系统设定中将该参数设置为0，然后再启动系统。',
  time: '2022-5-28 15:03:59'
}, {
  index: '2',
  id: 'EX1000 EMG',
  desc: 'STOP OR AXIS OVER LIMIT',
  solution: '1.检查急停按钮；2.检查是否过行程，在手动状态按住“超程解除”，将超程轴移动至不超程的位置',
  time: '2022-5-26 16:09:22'
}, {
  index: '3',
  id: 'SV 0433',
  desc: '(X)变频器DC LINK 电压低',
  solution: '1.测量强电实际电压情况是否低于强电要求电压范围；2.检测是否存在急停，导致强电未接通；3.可能跟随SV0364等报警出现，解决其他报警',
  time: '2022-5-26 16:00:41'
}]