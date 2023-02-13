import { useQuery } from 'react-query';
import { GamesService } from '../services/games.service';

export const useGamesQuery = () => {
  const { isLoading, data: res }: any = useQuery(
    'games list',
    () => GamesService.getAll(),
    {
      onSuccess: ({ data }) => {
        console.log(data);
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  return { isLoading, res };
};
