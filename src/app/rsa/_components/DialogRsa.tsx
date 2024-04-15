

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import forge from 'node-forge';

export default function DialogRsa() {

    const [keys, setKeys] = useState<any>()

    const generateRSAKeyPair = (e: any) => {
        e.preventDefault()
        const rsa = forge.pki.rsa;

        // Gere o par de chaves RSA
        const keyPair = rsa.generateKeyPair({ bits: 2048 });

        // Converta as chaves para texto no formato PEM
        const privateKeyText = forge.pki.privateKeyToPem(keyPair.privateKey);
        const publicKeyText = forge.pki.publicKeyToPem(keyPair.publicKey);

        // Atualize o estado com as chaves
        setKeys({ privateKey: privateKeyText, publicKey: publicKeyText });
    };

    const downloadKey = (key: string, fileName: string) => {
        const element = document.createElement('a');
        const file = new Blob([key], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = fileName;
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return <Dialog>
        <DialogTrigger asChild>
            <Button
                className="rounded-[8px] bg-blue-crypto-950 hover:bg-blue-crypto-950 text-ice-100 border-blue-crypto-900 border-2"
            >
                Generate Key Pair
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>Generate RSA Key Pair</DialogTitle>
            </DialogHeader>
            {keys && (
                <div className="flex flex-col gap-4">
                    <Button
                        onClick={() => downloadKey(keys.privateKey, 'private.key')}
                    >
                        Download Private Key
                    </Button>
                    <Button
                        onClick={() => downloadKey(keys.publicKey, 'public_key.pub')}
                    >
                        Download Public Key
                    </Button>
                </div>
            )}
            <DialogFooter>
                <Button onClick={(e) => generateRSAKeyPair(e)}>Save changes</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}