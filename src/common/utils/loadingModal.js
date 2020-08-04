import { Modal } from 'antd';

class LoadingModal {
    constructor() {
        this.modal = null;
    }
    start(text) {
        text = text || 'loading...';
        this.modal = Modal.warning({
            title: null,
            content: text,
            width: 320,
            className: 'my_loading_modal',
            maskClosable: false,
            icon: null,
            okText: null,
            cancelText: null
        });
    }
    end() {
        this.modal.destroy();
    }
}
export const loadingModal = new LoadingModal();
