import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    try {

        const reqBody = await request.json()
        const token = reqBody;
        
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })

        response.cookies.set("token", token, {
            httpOnly: true, 
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}