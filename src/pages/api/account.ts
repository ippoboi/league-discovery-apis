export const prerender = false; // Not needed if your project is in 'server' mode
import type { APIRoute } from 'astro';
import { getAccountData, getMatchesWithDetails, getProfileDetails } from '../../utils/accountUtils';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const username = data.get('username');
    const tagLine = data.get('tagLine');

    // Validate the data
    if (!username || !tagLine) {
      return new Response(
        JSON.stringify({
          success: false,
          message: 'Username and tag line are required',
        }),
        { status: 400 }
      );
    }

    // Use the existing utility function
    const accountData = await getAccountData(username as string, tagLine as string);

    // Get match history (latest 10 matches)
    const matchHistory = await getMatchesWithDetails(accountData.puuid, 10);

    // Return success response with account data and match history
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Account information processed successfully',
        data: {
          ...accountData,
          matchHistory,
        },
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: error instanceof Error ? error.message : 'An unknown error occurred',
      }),
      { status: 500 }
    );
  }
};
