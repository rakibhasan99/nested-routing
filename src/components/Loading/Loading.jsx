import { useNavigation } from "react-router-dom";

const Loading = () => {
    const navigation = useNavigation();
    return (
        <div className="text-center">
            {
                navigation.state === 'loading'? <span className="loading loading-dots loading-lg"></span> : ''
            }
        </div>
    );
};

export default Loading;