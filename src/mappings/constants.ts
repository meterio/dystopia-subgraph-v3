import {Address, BigDecimal, BigInt, dataSource, log} from '@graphprotocol/graph-ts';

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export let ZERO_BI = BigInt.fromI32(0)
export let ONE_BI = BigInt.fromI32(1)
export let ZERO_BD = BigDecimal.fromString('0')
export let ONE_BD = BigDecimal.fromString('1')
export let BI_18 = BigInt.fromI32(18)
export let DAY = BigDecimal.fromString('86400')

const network = dataSource.network();

// ***********************************************************************
//                    IMPLEMENT FOR EACH NETWORK
// ***********************************************************************

// minimum liquidity for price to get tracked = 0.01 ETH
export const MINIMUM_LIQUIDITY_THRESHOLD_USD = BigDecimal.fromString('100')

export function wethAddress(): Address {
  if (network == 'matic') {
    return Address.fromString('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619');
  } else if (network == 'bsc') {
    return Address.fromString(ADDRESS_ZERO); //todo
  } else if (network == 'fuji') {
    return Address.fromString(ADDRESS_ZERO);//todo
  } else if (network == 'metertest') {
    return Address.fromString('0x8a419ef4941355476cf04933e90bf3bbf2f73814');
  } else if (network == 'meter') {
    return Address.fromString('0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3');  // MTRG
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

export function usdcAddress(): Address {
  if (network == 'matic') {
    return Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174');
  } else if (network == 'bsc') {
    return Address.fromString(ADDRESS_ZERO); //todo
  } else if (network == 'fuji') {
    return Address.fromString(ADDRESS_ZERO);//todo
  } else if (network == 'metertest') {
    return Address.fromString('0x8ae4c669f147737085a23d578c1da94d3e39879f');
  } else if (network == 'meter') {
    return Address.fromString('0xd86e243fc0007e6226b07c9a50c9d70d78299eb5');  // USDC
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

export function usdcWethPairAddress(): Address {
  if (network == 'matic') {
    return Address.fromString('0xce1923d2242bba540f1d56c8e23b1fbeae2596dc');
  } else if (network == 'bsc') {
    return Address.fromString(ADDRESS_ZERO); //todo
  } else if (network == 'fuji') {
    return Address.fromString(ADDRESS_ZERO);//todo
  } else if (network == 'metertest') {
    return Address.fromString('0xc3177bee6182890a7a5bf367a55545a9697c133a');
  } else if (network == 'meter') {
    // return Address.fromString('0x609d49d84f8ec3836721daa061ff6bf5e181e39c');  // MTRG-USDT
    return Address.fromString('0x6bff2fd2554ad25e662dd6d7c902115e6b76f046');  // MTRG-USDC
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return Address.fromString(ADDRESS_ZERO);
  }
}

// token where amounts should contribute to tracked volume and liquidity
export function whitelisted(): Address[] {
  if (network == 'matic') {
    return [
      wethAddress(),
      Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174'), // USDC
      Address.fromString('0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'), // WMATIC
      Address.fromString('0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6'), // WBTC
      Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
      Address.fromString('0xc2132d05d31c914a87c6611c10748aeb04b58e8f'), // USDT
      Address.fromString('0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'), // MAI
      Address.fromString('0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'), // FRAX
      Address.fromString('0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f'), // USD+
      Address.fromString('0x580A84C73811E1839F75d86d75d88cCa0c241fF4'), // QI
      Address.fromString('0x255707b70bf90aa112006e1b07b9aea6de021424'), // TETU
    ]
  } else if (network == 'metertest') {
    return [
      wethAddress(),
      Address.fromString('0xfAC315d105E5A7fe2174B3EB1f95C257A9A5e271'), // WMTR
      Address.fromString('0xda5f90e416a22f6f65ed586a859c8666ce6ce1d1'), // USDT
      Address.fromString('0x8ae4c669f147737085a23d578c1da94d3e39879f'), // USDC
      Address.fromString('0x8a419ef4941355476cf04933e90bf3bbf2f73814'), // MTRG
      Address.fromString('0xcfd9102a2675e0d898982f1fd1dd0264aaa901da'), // WBTC
    ]
  } else if (network == 'meter') {
    return [
      wethAddress(),
      Address.fromString('0x1cf09D1B5Da9d9d24365D87B932A7c4bD018A419'), // AMPL
      Address.fromString('0x24aA189DfAa76c671c279262F94434770F557c35'), // BUSD
      Address.fromString('0x6CFe9AdaD5215195c1Aa9755DAed29360e6Ab986'), // FTB
      Address.fromString('0xb158870beB809Ad955Bf56065C5C10D7Fd957cC0'), // MOVR
      // Address.fromString('0x228ebBeE999c6a7ad74A6130E81b12f9Fe237Ba3'), // MTRG  already in wethAddress()
      Address.fromString('0xd86e243fc0007e6226b07c9a50c9d70d78299eb5'), // USDC
      Address.fromString('0x5Fa41671c48e3C951AfC30816947126CCC8C162e'), // USDT
      Address.fromString('0x8Df95e66Cb0eF38F91D2776DA3c921768982fBa0'), // VOLT
      Address.fromString('0xc1f6C86ABEe8e2e0B6fd5BD80F0b51fef783635C'), // WBTC
      Address.fromString('0xd5e615BB3c761AB4cD9251dEEd78Dac58BE9CcBF'), // TDROP
      Address.fromString('0x75Fd6F7EDCc5E7A8100eAd3D29CCD844153ef0F3'), // TFUEL
      Address.fromString('0x983147FB73A45FC7F8B4DFA1cd61Bdc7b111e5b6'), // ETH
      Address.fromString('0xF0E86246519Be0810C9FAfc8430C49799985aAA8'), // BNB
      Address.fromString('0x160361ce13ec33c993b5cca8f62b6864943eb083'), // WMTR
      Address.fromString('0x8bf591eae535f93a242d5a954d3cde648b48a5a8'), // suUSD
      Address.fromString('0x1c22531AA9747d76fFF8F0A43b37954ca67d28e0'), // suETH
      Address.fromString('0xe85411C030fB32A9D8b14Bbbc6CB19417391F711'), // suBTC
      Address.fromString('0x215d603293357ca222be92a1bf75eec38def0aad'), // stMTRG
    ]
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}

export function stablecoins(): Address[] {
  if (network == 'matic') {
    return [
      Address.fromString('0x2791bca1f2de4661ed88a30c99a7a9449aa84174'), // USDC
      Address.fromString('0x8f3cf7ad23cd3cadbd9735aff958023239c6a063'), // DAI
      Address.fromString('0xc2132d05d31c914a87c6611c10748aeb04b58e8f'), // USDT
      Address.fromString('0xa3Fa99A148fA48D14Ed51d610c367C61876997F1'), // MAI
      Address.fromString('0x45c32fA6DF82ead1e2EF74d17b76547EDdFaFF89'), // FRAX
      Address.fromString('0x236eeC6359fb44CCe8f97E99387aa7F8cd5cdE1f'), // USD+
    ]
  } else if (network == 'metertest') {
    return [
      Address.fromString('0xda5f90e416a22f6f65ed586a859c8666ce6ce1d1'), // USDT
      Address.fromString('0x8ae4c669f147737085a23d578c1da94d3e39879f'), // USDC
    ]
  } else if (network == 'meter') {
    return [
      Address.fromString('0x5Fa41671c48e3C951AfC30816947126CCC8C162e'), // USDT
      Address.fromString('0xd86e243fc0007e6226b07c9a50c9d70d78299eb5'), // USDC
      Address.fromString('0x8bf591eae535f93a242d5a954d3cde648b48a5a8'), // suUSD
      Address.fromString('0x24aA189DfAa76c671c279262F94434770F557c35'), // BUSD
    ]
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}
