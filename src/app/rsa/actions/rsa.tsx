'use server'

import forge from 'node-forge';

type Data = {
    message?: string
    key?: string
}

export const Encrypt = async (data: Data) => {

    // Função para criptografar o texto usando a chave pública
    const encryptTextWithPublicKey = (text: any, publicKey: any) => {
        const encrypted = publicKey.encrypt(text, 'RSA-OAEP');
        return forge.util.encode64(encrypted);
    };

    const encryptedText = encryptTextWithPublicKey(data.message, data.key);
    return encryptedText
}

export const Decrypt = async (data: Data) => {

    // Função para descriptografar o texto usando a chave privada
    const decryptTextWithPrivateKey = (encryptedText: any, privateKey: any) => {
        const decrypted = privateKey.decrypt(forge.util.decode64(encryptedText), 'RSA-OAEP');
        return decrypted;
    };

    const encryptedText = decryptTextWithPrivateKey(data.message, data.key);
    return encryptedText
}