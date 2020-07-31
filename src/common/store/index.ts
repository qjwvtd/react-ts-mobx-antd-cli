import { observable, action } from 'mobx';

interface MyStore {
    address: string,
    setAddress: (address: string) => void
}

class Store implements MyStore {

    @observable public address = "四川省成都市武侯区外双楠";

    @action.bound
    public setAddress(address: string): void {
        this.address = address;
    }
}
const store = new Store();
export default store;