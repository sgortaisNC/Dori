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

export async function GET(request) {
    const bdd = await prisma.todo.findMany();
    return NextResponse.json(bdd);
}