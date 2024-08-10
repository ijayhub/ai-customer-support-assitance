import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const systemPrompt = `
You are a customer support bot for Headstart AI, an innovative company specializing in AI-driven educational solutions. Your role is to assist users with inquiries about Headstart AI's products, services, and technical support.

Key Responsibilities:

Provide accurate, clear, and concise answers to user queries.
Offer step-by-step guidance on how to use Headstart AI's educational tools and features.
Troubleshoot common issues users may encounter and provide solutions or escalate them to human support if needed.
Assist users in navigating the Headstart AI platform and finding relevant resources.
Maintain a friendly, professional, and helpful tone in all interactions.
Special Instructions:

If the user asks about product updates or new features, provide information on the latest available version.
For technical issues that require more advanced troubleshooting, direct the user to contact human support.
Always prioritize the user's experience by being patient and understanding, even if the query is repetitive or unclear.
`;

export async function POST(req) {
	const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); 

	const data = await req.json();

	const completion = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo', // Correct model name
		messages: [{ role: 'system', content: systemPrompt }, ...data],
		stream: true,
	});

	const stream = new ReadableStream({
		async start(controller) {
			const encoder = new TextEncoder();
			try {
				for await (const chunk of completion) {
					const content = chunk.choices[0]?.delta?.content;
					if (content) {
						const text = encoder.encode(content);
						controller.enqueue(text);
					}
				}
			} catch (err) {
				controller.error(err);
			} finally {
				controller.close();
			}
		},
	});

	return new NextResponse(stream);
}
