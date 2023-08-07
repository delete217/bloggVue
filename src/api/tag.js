import request from '@/request'

export function getAllTags() {
  return request({
    url: '/tags',
    method: 'get',
  })
}

export function getAllTagsDetail() {
  return request({
    url: '/tags/details',
    method: 'get',
  })
}

export function getHotTags() {
  return request({
    url: '/tags/hotTags',
    method: 'get',
  })
}

export function getTag(id) {
  return request({
    url: `/tags/${id}`,
    method: 'get',
  })
}

export function getTagDetail(id) {
  return request({
    url: `/tags/details/${id}`,
    method: 'get',
  })
}
