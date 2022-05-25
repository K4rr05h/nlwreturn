import { CloseButton } from "../../CloseButton";
import { FeedbackType, feedbackTypes } from "../Index";

interface FeedbackContentStepProps {
    feedbackType: FeedbackType;
}

export function FeedbackContentStep({feedbackType}: FeedbackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType];

    return(
        <>
            <header className="flex flex-row">
                <span className="text-xl leading-6 flex items-center gap-2"> 
                    <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                { 
                    Object.entries(feedbackTypes).map(([key, value]) => {
                                
                        return (
                            null
                        );
                                
                    }) 
                }
            </div>
        </>
    );
}