import itemListDocs from '../../../content/doc-links.yml'

itemListDocs.forEach(section => {
  if (section.items) {
    extendItem(section.items, section.title)
  }
})

function createHash(link) {
  let index = -1
  if (link) {
    index = link.indexOf(`#`)
  }
  return index >= 0 ? link.substr(index + 1) : false
}

function extendItem(items, parentTitle) {
  items.forEach(item => {
    item.hash = createHash(item.link)
    item.parentTitle = parentTitle
    if (item.items) {
      extendItem(item.items, item.title)
    }
  })
}

function findBranch(tree, slug) {
  if (tree.link === slug) {
    return true
  }
  if (!tree.items) {
    return false
  }

  let result = false
  for (let branch of tree.items) {
    result = result || findBranch(branch, slug)
  }
  return result
}

function findRootParent(tree, slug) {
  for (let branch of tree) {
    const found = findBranch(branch, slug)
    if (found) {
      return branch
    }
  }
  return null
}

export { itemListDocs, findRootParent }
