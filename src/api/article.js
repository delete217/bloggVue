import request from '@/request'


export function getArticles(query, page) {
  return request({
    url: '/article',
    method: 'post',
    data: {
      page: page.pageNumber,
      pageSize: page.pageSize,
      name: page.name,
      sort: page.sort,
      year: query.year,
      month: query.month,
      tagId: query.tagId,
      categoryId: query.categoryId
    }
  })
}

export function getHotArtices() {
  return request({
    url: '/article/hot',
    method: 'post'
  })
}

export function getNewArtices() {
  return request({
    url: '/article/new',
    method: 'post'
  })
}

export function viewArticle(id) {
  return request({
    url: `/article/view/${id}`,
    method: 'post'
  })
}

export function getArticlesByCategory(id) {
  return request({
    url: `/article/category/${id}`,
    method: 'post'
  })
}

export function getArticlesByTag(id) {
  return request({
    url: `/article/tag/${id}`,
    method: 'post'
  })
}


export function publishArticle(article,token) {
  return request({
    headers: {'Authorization': token},
    url: '/article/publish',
    method: 'post',
    data: article
  })
}

export function listArchives() {
  return request({
    url: '/article/archives',
    method: 'post'
  })
}

export function getArticleById(id) {
  return request({
    url: `/article/${id}`,
    method: 'post'
  })
}

export function showByDate(year,month){
  return request({
    url: `/article/showByDate/${year}/${month}`,
    method: 'post'
  })
}
