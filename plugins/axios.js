import { MessageBox } from 'element-ui'

export default function({ $axios }) {
  $axios.onRequest(config => {
    const at = window.sessionStorage.getItem('accessToken')
    if (at) {
      config.headers['X-Access-Token'] = at
    }
    config.headers['X-Per-Page'] = 10
    return config
  })
  $axios.onResponse(res => {
    // console.log('plugins===>')
    // console.log(res.data.message)
    if (res.data.message === 'Unauthenticated.') {
      window.location.href = '/login'
      return ' '
    } else if (res.data.code === 0) {
      return res
    } else if (res.data.code !== 0) {
      MessageBox(res.data.message, '注意！', 'warning')
      return ' '
    }
  })
  // $axios.onError(error => {
  //   console.log(error)
  //   if (error.response.data.Code === 401) {
  //     window.location.href = '/'
  //   }
  //   return error
  // })
}
