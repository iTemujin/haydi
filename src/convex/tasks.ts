  import { query } from './_generated/server';

  export const get = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query('messages').collect();
    },
  });



// functions/addTask.js
import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const sendMessage = mutation({
    args: {
        sender: v.string(),
        text: v.string(),
    },
    handler: async (ctx, args) => {
      const message = { body: args.sender, author: args.text };
      const id = await ctx.db.insert("messages", message)
      return await ctx.db.get(id);
    },
})


export const send = mutation({
	args: { text: v.string(), sender: v.string() },
	handler: async (ctx, { text, sender }) => {
		const message = { text, sender };
		await ctx.db.insert('messages', message);
	}
});