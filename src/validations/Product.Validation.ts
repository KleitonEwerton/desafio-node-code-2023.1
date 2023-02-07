import * as yup from 'yup';

export const productValadationSchema = yup.object().shape({

    name: yup.string().required(),
    description: yup.string().required(),
    quantity: yup.number().required(),
    price: yup.number().required(),
    category: yup.string().required(),
    
})