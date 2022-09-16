import React from "react";

// Components
import Translator from "../../components/translator/Translator";
import TranslateHistory from "../../components/translateHistory/TranslateHistory";

export default function TranslatePage() {
    return (
        <>
        <Translator />
        <div className="history-container"> {/* Turn into styled.div grid */}
            <TranslateHistory 
            timeStamp={ 1 }
            english="This is a test"
            planco="Lis eu a kyew."/>
        </div>
        </>
    );
}
