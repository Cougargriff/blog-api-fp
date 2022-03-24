import { DataTypes, Model } from 'https://deno.land/x/denodb@v1.0.40/mod.ts';

class Post extends Model {
    static table = 'posts';
    static timestamps = true;

    static fields = {
        id: {
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.TEXT,
        content: DataTypes.TEXT
    };
};

export default Post;
