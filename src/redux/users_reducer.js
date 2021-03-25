import usersImg from "../img/user-img.png";
const changeFollow = "CHANGE-FOLLOW";

const initialState = {
        usersData: [
            {
                id: 1,
                usersImg: usersImg,
                followed: true,
                fullName: "Dmitry",
                status: "I am looking for a Job right now...",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                }
            },
            {
                id: 2,
                usersImg: usersImg,
                followed: false,
                fullName: "Swetlana",
                status: "I am so pretty",
                location: {
                    country: "Belarus",
                    city: "Minsk"
                }
            },
            {
                id: 3,
                usersImg: usersImg,
                followed: true,
                fullName: "Sergei",
                status: "I like football!!!",
                location: {
                    country: "Ukraine",
                    city: "Kiev"
                }
            },
            {
                id: 4,
                usersImg: usersImg,
                followed: true,
                fullName: "Andrew",
                status: "I am free to help you to create good Video Production",
                location: {
                    country: "Russia",
                    city: "Moscow"
                }
            },
            
        ],
};

const usersReducer = (state = initialState, action) => {
    // debugger;
    let stateCopy = { ...state };

    switch (action.type) {
        case changeFollow:
            stateCopy.usersData = [...state.usersData];
            stateCopy.usersData[action.id].followed = !stateCopy.usersData[action.id].followed;

            return stateCopy;

        default: return stateCopy;
    };
}

export const changeFollowAC = (index) => {
    return {
        type: changeFollow,
        id: index,
    };
};

export default usersReducer;