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
    return Address.fromString('0xe8876830e7cc85dae8ce31b0802313caf856886f');
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
    return Address.fromString('0x60982feb18b37c92b49e39e2d4a96917f953f8ab');
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
  } else {
    log.critical("UNKNOWN NETWORK {}", [network])
    return [Address.fromString(ADDRESS_ZERO)];
  }
}
