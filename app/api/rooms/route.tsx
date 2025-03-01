import dbConnect from '@/backend/config/dbConnect'
import { allRooms, newRoom } from '@/backend/controllers/roomControllers'
import {createEdgeRouter } from 'next-connect'
import { NextRequest, NextResponse } from 'next/server'
interface RequestContext{}
const router = createEdgeRouter<NextRequest,RequestContext>()
dbConnect()
router.get(allRooms) // anyone should be able to access, so no middleware for protection required.



export async function GET(
    request: NextRequest,
    ctx: RequestContext
  ): Promise<NextResponse> {
    return router.run(request, ctx) as Promise<NextResponse>;
  }