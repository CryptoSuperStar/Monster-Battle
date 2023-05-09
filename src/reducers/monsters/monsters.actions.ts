import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BattleResult, Monster } from '../../models/interfaces/monster.interface';
import { MonsterService } from './monsters.service';
import { RootState } from '../../app/store';
export const fetchMonstersData = createAsyncThunk<Monster[]>(
  'monsters/fetchMonstersData',
  MonsterService.getAll,
);

export const fetchBattleResult = createAsyncThunk(
  'monsters/fetchBattleResult',
  async({playerMonster, computerMonster}: {playerMonster:Monster | null, computerMonster: Monster | null}): Promise<BattleResult | null> => {
    const response = await MonsterService.getBattleResult(playerMonster, computerMonster);
    console.log(response," response")
  // MonsterService.getBattleResult,
    return response;

  }
);

export const setSelectedMonster = createAction<Monster | null>(
  'monsters/setSelectedMonster',
);

export const setSelectedComputerMonster = createAction<Monster | null>(
  'monsters/setSelectedComputerMonster',
);
