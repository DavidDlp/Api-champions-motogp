const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema(
    {
        name: {type:String, trim:true, required:true},
        alias: {type:String, trim:true, unique:true, required:true},
        password: {type:String, trim:true, required:true},
    },
    {
        timestamps: true
    }
)

userSchema.pre("save", function(next){
    this.password = bcrypt.hashSync(this.password, 10)
});

const User = mongoose.model('users', userSchema);

module.Exports = User