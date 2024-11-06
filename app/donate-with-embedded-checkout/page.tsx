import type {Metadata} from "next";

import CheckoutForm from "@/components/CheckoutForm";

export const metadata: Metadata = {
    title: "Donate with embedded Checkout | Next.js + TypeScript Example",
};

export default function DonatePage(): JSX.Element {
    return (
        <div>
            <h1>VOTRE DON VOUS PERMET DE BÉNÉFICIER D’AVANTAGES FISCAUX</h1>
            <p>
                <strong>Pour les particuliers (impôt sur le revenu) : </strong>66 % du montant de votre don est déductible de votre impôt
                sur le revenu (dans la limite de 20 % de votre revenu imposable).
            </p>
            <p>
                <strong>Pour les entreprises (impôt sur les sociétés) : </strong>
                60 % du montant de vos dons sont déductibles de l’impôt
                sur les sociétés, dans la limite de 0,5 % du chiffre d’affaires hors taxe (excédent reportable sur 5 ans).
            </p>
            <p>
                <strong>Libéralités :</strong> Le Fonds de dotation est habilité à recevoir des legs ou donations et peut être désigné
                comme bénéficiaire d’assurance-vie. Les montants versés sont exonérés de droits de mutation/succession.
            </p>
            <CheckoutForm uiMode="embedded"/>
        </div>
    );
}
