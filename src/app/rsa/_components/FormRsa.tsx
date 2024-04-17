'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { useForm } from "react-hook-form"
import DialogRsa from "./DialogRsa"
import forge from 'node-forge';

type Data = {
    message?: string
    key?: string
}

export default function FormRsa() {

    const form = useForm()

    const [isActive, Active] = useState<string>('Encrypt')
    const [message, setMessage] = useState<string>('')

    const Encrypt = (data: Data) => {
        // Função para criptografar o texto usando a chave pública
        const encryptTextWithPublicKey = (text: any, publicKey: any) => {
            const rsa_pub = forge.pki.publicKeyFromPem(publicKey)
            const encrypted = rsa_pub.encrypt(forge.util.encodeUtf8(text), 'RSA-OAEP');
            return forge.util.encode64(encrypted);
        };
        const encryptedText = encryptTextWithPublicKey(data.message, data.key);
        return encryptedText
    }

    const Decrypt = (data: Data) => {

        // Função para descriptografar o texto usando a chave privada
        const decryptTextWithPrivateKey = (encryptedText: any, privateKey: any) => {
            const rsa_priv = forge.pki.privateKeyFromPem(privateKey)
            const decrypted = rsa_priv.decrypt(forge.util.decode64(encryptedText), 'RSA-OAEP');
            console.log(decrypted)
            return forge.util.decodeUtf8(decrypted)
        };

        const encryptedText = decryptTextWithPrivateKey(data.message, data.key);
        return encryptedText
    }

    const handleChangeMode = (mode: string) => {
        setMessage('')
        return Active(mode)
    }

    const handleSubmit = form.handleSubmit(async (data) => {
        try {
            let keyContent = '';

            if (data.key && data.key.length > 0) {
                const file = data.key[0];
                const fileContent = await readFileAsync(file);
                if (typeof fileContent === 'string') { // Verificar se o conteúdo do arquivo é uma string
                    keyContent = fileContent;
                } else {
                    throw new Error('Failed to read file content.');
                }
            }

            if (isActive === 'Encrypt') {
                setMessage(Encrypt({ ...data, key: keyContent }));
            }

            if (isActive === 'Decrypt') {
                setMessage(Decrypt({ ...data, key: keyContent }));
            }

            console.log(message)

            toast({
                title: 'Success!',
                description: `Message successfully ${isActive.toLowerCase()}`
            });
        } catch (error) {
            toast({
                title: 'Error',
                description: 'An error occurred. Please try again.'
            });
        }
    });

    // Função para ler o conteúdo do arquivo como uma string
    const readFileAsync = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (typeof reader.result === 'string') { // Verificar se o resultado do leitor é uma string
                    resolve(reader.result);
                } else {
                    reject(new Error('Failed to read file content.'));
                }
            };
            reader.onerror = reject;
            reader.readAsText(file);
        });
    };

    return <div className="flex flex-col items-center max-[1480px]:my-[18px]">
        <div className="flex justify-between items-center max-[1480px]:w-[732px] min-[1480px]:w-full max-md:w-[354px] mb-[18px]">
            <div className="dark:border-blue-crypto-900 border-2 dark:bg-blue-crypto-950 p-1 rounded-[8px] flex">
                <Button
                    className={cn([
                        "rounded-none rounded-tl-[4px] rounded-bl-[4px] bg-blue-crypto-950 hover:bg-blue-crypto-950 text-ice-100 h-[34px]",
                        isActive === "Encrypt" && "bg-blue-crypto-900 hover:bg-blue-crypto-900 dark:text-ice-100"
                    ])}
                    onClick={() => handleChangeMode('Encrypt')}
                >
                    Encrypt
                </Button>
                <Button
                    className={cn([
                        "rounded-none rounded-tr-[4px] rounded-br-[4px] bg-blue-crypto-950 hover:bg-blue-crypto-950 text-ice-100 h-[34px] box-border",
                        isActive === "Decrypt" && "bg-blue-crypto-900 hover:bg-blue-crypto-900 text-ice-100"
                    ])}
                    onClick={() => handleChangeMode('Decrypt')}
                >
                    Decrypt
                </Button>
            </div>
            <DialogRsa />
        </div>

        <div className="flex gap-[18px] flex-wrap justify-center items-center">
            <div className="w-[732px] max-md:w-[354px] h-[538px] max-md:h-[450px] dark:bg-blue-crypto-950 dark:border-blue-crypto-900 border-2 rounded-[8px] flex flex-col justify-center items-center">
                <form
                    className="flex flex-col justify-center items-center"
                    onSubmit={handleSubmit}
                >
                    <Textarea
                        placeholder={
                            isActive === 'Decrypt' ? 'Enter a message!' :
                                isActive === 'Encrypt' ? 'Enter a message encrypted!' :
                                    ''
                        }
                        className="dark:text-ice-100 dark:border-blue-crypto-900 border-2 w-[684px] max-md:w-[306px] rounded-[6px] h-[376px] max-md:h-[288px] mb-[18px] resize-none"
                        {...form.register('message')}
                    />
                    <Input
                        placeholder={
                            isActive === 'Decrypt' ? 'Enter your private key!' :
                                isActive === 'Encrypt' ? 'Enter your public key!' :
                                    ''
                        }
                        type="file"
                        className="dark:text-ice-100 dark:border-blue-crypto-900 border-2 w-[684px] max-md:w-[306px] rounded-[6px] h-[36px] mb-[18px]"
                        {...form.register('key')}
                    />
                    <Button
                        className="bg-blue-crypto-950 hover:bg-blue-crypto-900 border-blue-crypto-900 border-2 text-ice-100 rounded-[6px] max-md:w-[306px] min-[1480px]:w-[684px]"
                        type="submit"
                    >
                        {isActive}
                    </Button>
                </form>
            </div>
            <div className="w-[732px] max-md:w-[354px] h-[538px]  dark:bg-blue-crypto-950 dark:border-blue-crypto-900 border-2 rounded-[8px] flex justify-center items-center">
                <Textarea
                    placeholder={
                        isActive === 'Decrypt' ? 'Your decrypted message here!' :
                            isActive === 'Encrypt' ? 'Your encrypted message here!' :
                                ''
                    }
                    className="dark:text-ice-100 dark:border-blue-crypto-900 border-2 w-[684px] max-md:w-[306px] rounded-[6px] min-h-[484px] max-h-[484px] resize-none"
                    value={message}
                    readOnly
                />
            </div>
        </div>

    </div>
}