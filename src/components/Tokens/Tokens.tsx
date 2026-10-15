import Button from "../Button";
import TokenList, { WalletToken } from "./TokenList";

interface TokensProps {
    tokenList: WalletToken[];
    balancesVisible: boolean;
    tokenListVisible: boolean;
    setTokenListVisible: () => void;
}

export default function Tokens({tokenList, balancesVisible, tokenListVisible, setTokenListVisible}: TokensProps) {
    return (
        <div className="w-full flex-1 bg-background py-8">
            <div className="section-inner flex flex-col gap-4">
            <div className="flex items-center justify-between text-text font-bold text-xl">
                <Button variant="transparent" className="p-3 font-mono" onClick={setTokenListVisible}>
                    {tokenListVisible ? "TOKENS" : "TOKENS"}
                    <span
                        aria-hidden="true"
                        className="token-list-chevron ml-4 inline-block"
                        data-open={tokenListVisible}
                    >
                        ›
                    </span>
                </Button>
                <Button variant="secondary" className="flex size-12 items-center justify-center" aria-label="Search tokens">
                    <span
                        aria-hidden="true"
                        className="size-5 bg-current [mask-image:url('/icons/search.svg')] mask-contain mask-no-repeat mask-center"
                    />
                </Button>

            </div>
            <div
                className="token-list-collapse"
                data-open={tokenListVisible}
                inert={!tokenListVisible}
                aria-hidden={!tokenListVisible}
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
