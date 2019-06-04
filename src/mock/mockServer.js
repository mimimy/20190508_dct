import Mock from 'mockjs'
import data from './data'

Mock.mock('/goods',{code:0,data:data.goods})

Mock.mock('/remarks',{code:0,data:data.remarks})

Mock.mock('/info',{code:0,data:data.info})

