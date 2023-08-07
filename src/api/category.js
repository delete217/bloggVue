import request from '@/request'

export function getAllCategorys() {
  return request({
    url: '/category',
    method: 'get',
  })
}

export function getAllCategorysDetail() {
  return request({
    url: '/category/details',
    method: 'get',
  })
}

export function getCategory(id) {
  return request({
    url: `/category/${id}`,
    method: 'get',
  })
}

export function getCategoryDetail(id) {
  return request({
    url: `/category/details/${id}`,
    method: 'get',
  })
}
