class BinarySearch{
  search(key,items){
    let start = 0, end = items.length, mid = parseInt((start + end)/2);
    while(true){
      if(items[mid] === key){
        return true;
      }
      if(items[start] > key || items[end] < key){
        return false;
      }
      if(items[mid] < key){
        start = mid + 1;
      }
      else{
        end = mid - 1;
      }
      mid = parseInt((start + end)/2);
    }
  }

  searchRecursive(items,key,start,end){
    let mid = parseInt((start + end)/2);
    if(items[mid] === key){
      return true;
    }
    if(items[start] > key || items[end] < key){
      return false;
    }
    if(items[mid] < key){
      return this.searchRecursive(items,key,mid+1,end);
    }
    else{
      return this.searchRecursive(items,key,start,mid-1);
    }
  }
}

module.exports = BinarySearch;
