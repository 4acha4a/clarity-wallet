import { useState } from "react";
import Button from "../Button";
import TokenList, { WalletToken } from "./TokenList";
import WalletTabs, { Tab } from "./WalletTabs";

interface TokensProps {
    tokenList: WalletToken[];
    balancesVisible: boolean;
}

export default function Tokens({tokenList, balancesVisible}: TokensProps) {
    const [activeTab, setActiveTab] = useState<Tab>("tokens");
    return (
        <div className="w-full flex-1 bg-background py-8">
            <div className="section-inner flex flex-col gap-4">
            <div className="flex items-center justify-between text-text font-bold text-xl">
                <WalletTabs activeTab={activeTab} onToggleTab={setActiveTab}/>
                <Button variant="secondary" className="flex size-12 items-center justify-center" aria-label="Search tokens">
                    <span
                        aria-hidden="true"
                        className="size-5 bg-current [mask-image:url('/icons/search.svg')] mask-contain mask-no-repeat mask-center"
                    />
                </Button>

            </div>
            <div
                className="token-list-collapse"
                data-open={activeTab === "tokens"}
                inert={!(activeTab === "tokens")}
                aria-hidden={!(activeTab === "tokens")}
            >
                <div>
                    <TokenList balancesVisible={balancesVisible}>
                        {tokenList}
                    </TokenList>
                </div>
            </div>
            </div>
        </div>
    );
}
