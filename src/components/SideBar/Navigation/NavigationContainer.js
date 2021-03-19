import { connect } from "react-redux";
import Navigation from "./Navigation";

let mapStateToProps = (state, ownProps) => {
    return {
        className: ownProps.className,
        navData: state.sideBar.navigation.navData,
    }
};

const NavigationContainer = connect(mapStateToProps)(Navigation);

export default NavigationContainer;