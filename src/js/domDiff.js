import { ATTR, TEXT, REPLACE, REMOVE } from './patchTypes'

let patches = {}

function domDiff(oldVdom, newVdom) {
  let index = 0
  vnodeWalk(oldVdom, newVdom, index)
  return patches
}

function vnodeWalk(oldNode, newNode, index){
  let vnPatch = []

  if(!newNode){
    vnPatch.push
  }
}

export default domDiff