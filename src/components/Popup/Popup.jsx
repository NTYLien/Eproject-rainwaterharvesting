import './Popup.css';

const Popup = ({ children }) => {
    return <div class="modal">
        <div class="modal-content">
            {children}
        </div>

    </div>
}

export default Popup;