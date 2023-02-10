import { useQuery } from 'react-query';
import { GamesService } from '../services/games.service';
import { useGames } from '../store';

export const useGamesQuery = () => {
  const getGames = useGames((state) => state.getGames);

  const { isLoading, data }: any = useQuery(
    'games list',
    () => GamesService.getAll(),
    {
      onSuccess: ({ data }) => {
        getGames(data);
      },
      onError: (error: any) => {
        alert(error.message);
      },
    }
  );

  return { isLoading, data };
};
