import FormRsa from "./_components/FormRsa";

export default function Home() {

  return <main className="flex flex-col items-center justify-between">
    <div className="w-full min-h-[calc(100vh-50px)] max-w-[1490px] items-center justify-center text-sm lg:flex">
      <FormRsa />
    </div>
    <div className="max-w-[1490px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">RSA-OAEP (Optimal Asymmetric Encryption Padding)</h2>
      <p className="text-base md:text-lg lg:text-xl mb-4">
        RSA-OAEP is a widely used public key cryptography scheme to protect data confidentiality during transmission. Here&apos;s a detailed explanation of how it works:
      </p>
      <ul>
        <li className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">1. Key Pair Generation</h3>
          <p className="text-base md:text-lg lg:text-xl">
            The process starts with the generation of an RSA key pair - a public key and a private key. The public key is shared to encrypt data, while the private key is kept secret and used to decrypt data.
          </p>
        </li>
        <li className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">2. Optimized Padding</h3>
          <p className="text-base md:text-lg lg:text-xl">
            Before encryption, RSA-OAEP applies optimized padding to the message. This padding enhances the security of encryption, making it harder for an attacker to deduce information about the original message.
          </p>
        </li>
        <li className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">3. Encryption</h3>
          <p className="text-base md:text-lg lg:text-xl">
            The message, after padding, is then encrypted using the RSA public key. The RSA algorithm ensures that only the corresponding private key can successfully decrypt the data.
          </p>
        </li>
        <li className="mb-6">
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">4. Decryption</h3>
          <p className="text-base md:text-lg lg:text-xl">
            To decrypt the data, the recipient uses the private key corresponding to the public key used in encryption. The padding is removed, and the original message is retrieved.
          </p>
        </li>
        <li>
          <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2">5. SHA1 or SHA256</h3>
          <p className="text-base md:text-lg lg:text-xl">
            By default, the RSA-OAEP algorithm uses the SHA1 or SHA256 message digest algorithm to compute a message digest as part of the encryption operation. This adds an extra layer of security to the encrypted data.
          </p>
        </li>
      </ul>
    </div>
  </main>
}
