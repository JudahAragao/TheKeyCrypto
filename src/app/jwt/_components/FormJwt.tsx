'use client'

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import jwt from 'jsonwebtoken';
import { redirect } from "next/navigation";

// interface JwtPayload {
//     data?: string;
// }

// interface DecodedToken {
//     header?: string;
//     payload?: JwtPayload;
// }

// const convertJwtToDecodedToken = (jwtToken: jwt.Jwt | null): DecodedToken | null => {
//     if (!jwtToken) return null;
//     const decodedToken: DecodedToken = {
//         header: jwtToken.header?.alg || '',
//         payload: jwtToken.payload as JwtPayload,
//     };
//     return decodedToken;
// };

export default function FormJwt() {

    // const { register, setValue, watch } = useForm();
    // const [jwtToken, setJwtToken] = useState<string | null>(null);
    // const [decodedToken, setDecodedToken] = useState<DecodedToken | null>({});
    // const inputData = watch('data');

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name, value } = e.target;
    //     setValue(name, value);
    // };

    // useEffect(() => {
    //     const updateJWT = () => {
    //         if (!decodedToken || typeof decodedToken.header !== 'string' || typeof decodedToken.payload !== 'object') {
    //             return; // Verifica se decodedToken e suas propriedades são válidas
    //         }
    //         const token = jwt.sign({ header: decodedToken.header, payload: decodedToken.payload }, 'your_secret_key');
    //         setJwtToken(token);
    //         const decoded = jwt.decode(token, { complete: true }) as jwt.Jwt | null;
    //         setDecodedToken(convertJwtToDecodedToken(decoded));
    //     };

    //     // Atualize o JWT sempre que houver uma mudança no input solitário ou nos estados decodedToken.header e decodedToken.payload
    //     updateJWT();
    // }, [inputData, decodedToken?.header, decodedToken?.payload]);
    return <></>

    // return <div className="flex justify-center mt-10">
    //     <div className="flex flex-col items-start">
    //         <input
    //             type="text"
    //             className="border border-gray-400 p-2 mr-2"
    //             {...register('data')}
    //             placeholder="Input solitário (JWT Payload)"
    //             onChange={handleInputChange}
    //         />
    //         {jwtToken && (
    //             <div className="mt-4">
    //                 <h2>JWT Codificado:</h2>
    //                 <p>{jwtToken}</p>
    //             </div>
    //         )}
    //     </div>

    //     <div className="flex flex-col ml-8">
    //         <div className="mt-4">
    //             <h2>Header:</h2>
    //             <input
    //                 type="text"
    //                 name="header"
    //                 value={decodedToken?.header || ''}
    //                 className="border border-gray-400 p-2"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div className="mt-4">
    //             <h2>Payload do Input Solitário:</h2>
    //             <input
    //                 type="text"
    //                 name="data"
    //                 value={decodedToken?.payload?.data || ''}
    //                 className="border border-gray-400 p-2"
    //                 onChange={handleInputChange}
    //             />
    //         </div>
    //         <div className="mt-4">
    //             <h2>Verificar Assinatura:</h2>
    //             <input
    //                 type="text"
    //                 value={decodedToken ? 'Assinatura válida' : 'Assinatura inválida'}
    //                 className="border border-gray-400 p-2"
    //                 readOnly
    //             />
    //         </div>
    //     </div>
    // </div>
}