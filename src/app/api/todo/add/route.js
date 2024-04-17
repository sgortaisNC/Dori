import {NextResponse} from "next/server";
import prisma from '@/lib/prisma';

export async function POST(request) {
    const body = await request.json();
    const bdd = await prisma.todo.create({
        data: {
            task: body.task,
        }
    });
    return NextResponse.json(bdd);
}
