import Banner from "../models/Banner"; 

export const create = async (req, res) => {
    try {
        const banner = await new Banner(req.body).save()
        res.json(banner);
    } catch (error) {
        res.status(400).json({error})
    }
}

export const read = async ( req, res) => {
    const condition = {_id: req.params.id}
    try {
        const banner = await Banner.findOne(condition).exec();
     
        res.json({
            banner
       
        })
    } catch (error) {
        
    }
}
export const list = async ( req, res) => {
    try {
        const banner = await Banner.find().exec();
        res.json(banner)
    } catch (error) {
        
    }
}
export const remove = async ( req, res) => {
    const condition = { _id: req.params.id};
    try {
        const banner = await Banner.findOneAndDelete(condition).exec();
        res.json(banner)
    } catch (error) {
        
    }
}
export const update = async ( req, res) => {
    const condition = { _id: req.params.id};
    const document = req.body;
    const options = { new: true}
    try {
        const banner = await Banner.findOneAndUpdate(condition, document, options).exec();
        res.json(banner)
    } catch (error) {
        
    }
}