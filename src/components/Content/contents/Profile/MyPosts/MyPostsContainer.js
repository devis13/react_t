import { connect } from 'react-redux';
import { updatePostValueActionCreator, addPostActionCreator } from '../../../../../redux/profile_reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state, ownProps) => {

    const statePosts = state.contents.profile.myPosts;

    return {
        className: ownProps.className,
        postValue: statePosts.postValue,
        postData: statePosts.postData,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {

        onChangeValue: (text) => {
            dispatch(updatePostValueActionCreator(text));
        },
    
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostContainer;