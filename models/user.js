import { createHmac } from 'crypto';
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    birthday: {
        type: String,
    },
    gender: {
        type: String,
    },
    role: {
        type: Number,
        default: 0,
    },
    note: {
        type: String,
    },
}, { timestamps: true });

userSchema.methods = {
    authenticate(password) {
        return this.password === this.encryptPassword(password);
    },
    encryptPassword(password) {
        if (!password) return;
        try {
            return createHmac("SHA256", "DATN").update(password).digest("hex");
        } catch (error) {
            console.log(error);
        }
    }
}

userSchema.pre("save", function (next) {
    this.password = this.encryptPassword(this.password);
    next();
});

userSchema.pre("findOneAndUpdate", function (next) {
    if (this._update.password) {
        this._update.password = createHmac("SHA256", "DATN").update(this._update.password).digest("hex")
    }
    next();
});

userSchema.index({'$**': 'text'});

export default model("User", userSchema);

