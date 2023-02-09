import staffApi from "./regionApi";
import {IRegion} from "./region.type";


export const homeEndpoints = staffApi.injectEndpoints({
  endpoints: (builder) => ({
    getRegion: builder.query<IRegion[],string>({
      query: () => ({
        url: `region`,
        method:"GET"
      }),
      providesTags: ["region"],
    }),

  }),
});

export const { useGetRegionQuery,  } = homeEndpoints;
