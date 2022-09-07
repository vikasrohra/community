import CommunityOwner from "./CommunityOwner";
import TopContributors from "./TopContributors";

const RightSection = (props) => {
    const { animate } = { ...props };

    return (
        <div className={`hidden lg:w-[50%] xl:w-[35%] lg:block border-0 rounded-md ${animate ? "lg:mt-4" : "lg:mt-0"}`}>
            <CommunityOwner animate={animate} />
            <TopContributors animate={animate} />
        </div>
    )
}

export default RightSection;