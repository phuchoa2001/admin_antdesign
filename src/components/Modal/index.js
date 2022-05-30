import { useSelector } from 'react-redux';

import AddOrder from './AddOrder';
import AddUsers from './AddUsers';
import AddProducts from './AddProducts';
import Delete from './Delete';
function Modals() {
    const StateModal = useSelector(state => state.Modal)
    const { type } = StateModal;
    switch (type) {
        case "Add order":
        case "Edit order":
            return <AddOrder />;
        case "Add users":
        case "Edit users":
            return <AddUsers />;
        case "Add products":
        case "Edit products":
            return <AddProducts />
        case "Delete order":
        case "Delete users":
        case "Delete products":
            return <Delete />
        default:
            return <></>;
    }
};

export default Modals;