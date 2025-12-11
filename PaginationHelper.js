class PaginationHelper {
    constructor(collection, itemsPerPage) {
        this.collection = collection;
        this.itemsPerPage = itemsPerPage;
    }
    itemCount() {
        return this.collection.length;
    }
    pageCount() {
        return Math.ceil(this.collection.length / this.itemsPerPage);
    }

    pageItemCount(pageIndex) {
        if (pageIndex < 0 || pageIndex + 1 > this.pageCount()) return -1;
        if (pageIndex === this.pageCount() - 1) {
            const remainder = this.collection.length % this.itemsPerPage;
            return remainder === 0 ? this.itemsPerPage : remainder;
        }
        return this.itemsPerPage;


    }
    pageIndex(itemIndex) {
        if (itemIndex < this.collection.length && itemIndex >= 0) return Math.floor((itemIndex) / this.itemsPerPage);
        else return -1;
    }
}