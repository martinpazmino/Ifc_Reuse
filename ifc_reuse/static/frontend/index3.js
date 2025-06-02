import{an as qa,X as rn,ao as Ka,f as de,a as Gt,ap as Jo,e as qt,V as tt,ac as Ya,aq as zi,W as zn,v as le,ar as ni,Y as er,as as bn,o as ke,r as we,F as vn,at as Za,au as $a,av as nr,aw as ja,ax as Qa,ay as Ja,g as oe,P as ki,az as tc,aA as fr,_ as Ze,a5 as $i,a6 as ds,a3 as ai,a4 as ci,a2 as ta,aB as ec,a8 as Fn,aC as ji,aD as nc,aE as ic,aF as Zn,aG as rc,aH as sc,aI as oc,aJ as ac,aK as cc,aL as lc,aM as fc,aN as dc,aO as uc,aP as hc,aQ as pc,aR as _c,aS as mc,aT as gc,aU as bc,aV as vc,aW as xc,a9 as Sc,aX as dr,a1 as On,aY as gi,aZ as Ec,$ as si,a_ as Mc,a$ as Tc,b0 as Ac,b1 as yc,b2 as ea,b3 as wc,b4 as Rc,b5 as Cc,p as us,t as Xt,y as Ic,b6 as Pc,b7 as Uc,n as xn,j as kn,k as Le,M as We,b8 as na,Z as gn,b9 as qe,ba as Qi,bb as ia,bc as ra,bd as sa,m as oa,be as Dc,bf as Lc,bg as Nc,bh as aa,ab as mn,bi as Fc,bj as Oc,bk as Bc,bl as Vc,aa as Gc,bm as ca,bn as Hc,bo as la,bp as fa,bq as ur,br as hr,bs as pr,bt as _r,bu as Jt,bv as Ts,bw as As,bx as ys,by as ws,bz as Rs,bA as Cs,bB as Is,bC as Ps,bD as Us,bE as Ds,bF as Ls,bG as Ns,bH as Fs,bI as Os,bJ as Bs,bK as Vs,bL as Gs,bM as Hs,bN as zs,bO as ks,bP as Ws,bQ as mr,bR as Xs,bS as qs,bT as zc,bU as Ks,bV as Ys,bW as Zs,bX as Or,bY as Br,bZ as Vr,b_ as Gr,b$ as Hr,c0 as zr,c1 as kr,c2 as kc,c3 as $s,c4 as Wc,c5 as Wi,c6 as Xc,c7 as js,c8 as Qs,c9 as Js,ca as Wr,cb as Xr,cc as qc,cd as da,a0 as hs,ce as Ee,cf as ir,cg as Kc,ch as Yc,ci as ua,u as ha,cj as to,U as pa,ck as eo,cl as _a,cm as li,cn as Wn,O as Zc,s as $c,co as jc,cp as Qc,cq as Jc,cr as no,cs as tl,ct as el,cu as nl,cv as il,cw as rl,cx as sl,cy as ol,cz as al,cA as cl,cB as ll,cC as fl,cD as dl,cE as ul,cF as hl,cG as pl,cH as _l,cI as ml,af as gl,B as xe,am as bl,I as vl,i as ma,L as ga,E as ba,l as xl,T as ii,c as va,q as Ge,G as Sl,cJ as El,ai as Ml,aj as io,cK as Tl}from"./main.js";import"./web-ifc-api.js";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xa(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Al(n){const t=new WeakMap;function e(o,l){const f=o.array,p=o.usage,h=f.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,f,p),o.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)o.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:u,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,f){const p=l.array,h=l.updateRanges;if(n.bindBuffer(f,o),h.length===0)n.bufferSubData(f,0,p);else{h.sort((_,M)=>_.start-M.start);let u=0;for(let _=1;_<h.length;_++){const M=h[u],S=h[_];S.start<=M.start+M.count+1?M.count=Math.max(M.count,S.start+S.count-M.start):(++u,h[u]=S)}h.length=u+1;for(let _=0,M=h.length;_<M;_++){const S=h[_];n.bufferSubData(f,S.start*p.BYTES_PER_ELEMENT,p,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=t.get(o);(!p||p.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const f=t.get(o);if(f===void 0)t.set(o,e(o,l));else if(f.version<o.version){if(f.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,o,l),f.version=o.version}}return{get:r,remove:s,update:a}}var yl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wl=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Rl=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Il=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ul=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dl=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ll=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fl=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ol=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bl=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Vl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hl=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,zl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ql=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yl=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Zl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$l=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jl=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ql=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ff=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Af=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,If=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Of=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$f=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,td=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ed=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,nd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,id=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,od=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ad=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ld=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ud=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Md=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ld=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Nd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Od=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Hd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Xd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Kd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$d=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,eu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ru=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,su=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vt={alphahash_fragment:yl,alphahash_pars_fragment:wl,alphamap_fragment:Rl,alphamap_pars_fragment:Cl,alphatest_fragment:Il,alphatest_pars_fragment:Pl,aomap_fragment:Ul,aomap_pars_fragment:Dl,batching_pars_vertex:Ll,batching_vertex:Nl,begin_vertex:Fl,beginnormal_vertex:Ol,bsdfs:Bl,iridescence_fragment:Vl,bumpmap_pars_fragment:Gl,clipping_planes_fragment:Hl,clipping_planes_pars_fragment:zl,clipping_planes_pars_vertex:kl,clipping_planes_vertex:Wl,color_fragment:Xl,color_pars_fragment:ql,color_pars_vertex:Kl,color_vertex:Yl,common:Zl,cube_uv_reflection_fragment:$l,defaultnormal_vertex:jl,displacementmap_pars_vertex:Ql,displacementmap_vertex:Jl,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,colorspace_fragment:nf,colorspace_pars_fragment:rf,envmap_fragment:sf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:cf,envmap_physical_pars_fragment:vf,envmap_vertex:lf,fog_vertex:ff,fog_pars_vertex:df,fog_fragment:uf,fog_pars_fragment:hf,gradientmap_pars_fragment:pf,lightmap_pars_fragment:_f,lights_lambert_fragment:mf,lights_lambert_pars_fragment:gf,lights_pars_begin:bf,lights_toon_fragment:xf,lights_toon_pars_fragment:Sf,lights_phong_fragment:Ef,lights_phong_pars_fragment:Mf,lights_physical_fragment:Tf,lights_physical_pars_fragment:Af,lights_fragment_begin:yf,lights_fragment_maps:wf,lights_fragment_end:Rf,logdepthbuf_fragment:Cf,logdepthbuf_pars_fragment:If,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Uf,map_fragment:Df,map_pars_fragment:Lf,map_particle_fragment:Nf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Of,metalnessmap_pars_fragment:Bf,morphinstance_vertex:Vf,morphcolor_vertex:Gf,morphnormal_vertex:Hf,morphtarget_pars_vertex:zf,morphtarget_vertex:kf,normal_fragment_begin:Wf,normal_fragment_maps:Xf,normal_pars_fragment:qf,normal_pars_vertex:Kf,normal_vertex:Yf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:$f,clearcoat_normal_fragment_maps:jf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:Jf,opaque_fragment:td,packing:ed,premultiplied_alpha_fragment:nd,project_vertex:id,dithering_fragment:rd,dithering_pars_fragment:sd,roughnessmap_fragment:od,roughnessmap_pars_fragment:ad,shadowmap_pars_fragment:cd,shadowmap_pars_vertex:ld,shadowmap_vertex:fd,shadowmask_pars_fragment:dd,skinbase_vertex:ud,skinning_pars_vertex:hd,skinning_vertex:pd,skinnormal_vertex:_d,specularmap_fragment:md,specularmap_pars_fragment:gd,tonemapping_fragment:bd,tonemapping_pars_fragment:vd,transmission_fragment:xd,transmission_pars_fragment:Sd,uv_pars_fragment:Ed,uv_pars_vertex:Md,uv_vertex:Td,worldpos_vertex:Ad,background_vert:yd,background_frag:wd,backgroundCube_vert:Rd,backgroundCube_frag:Cd,cube_vert:Id,cube_frag:Pd,depth_vert:Ud,depth_frag:Dd,distanceRGBA_vert:Ld,distanceRGBA_frag:Nd,equirect_vert:Fd,equirect_frag:Od,linedashed_vert:Bd,linedashed_frag:Vd,meshbasic_vert:Gd,meshbasic_frag:Hd,meshlambert_vert:zd,meshlambert_frag:kd,meshmatcap_vert:Wd,meshmatcap_frag:Xd,meshnormal_vert:qd,meshnormal_frag:Kd,meshphong_vert:Yd,meshphong_frag:Zd,meshphysical_vert:$d,meshphysical_frag:jd,meshtoon_vert:Qd,meshtoon_frag:Jd,points_vert:tu,points_frag:eu,shadow_vert:nu,shadow_frag:iu,sprite_vert:ru,sprite_frag:su},ot={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},He={basic:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Ee([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Ee([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Ee([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Ee([ot.points,ot.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Ee([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Ee([ot.common,ot.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Ee([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Ee([ot.sprite,ot.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Ee([ot.common,ot.displacementmap,{referencePosition:{value:new tt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Ee([ot.lights,ot.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};He.physical={uniforms:Ee([He.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const bi={r:0,b:0,g:0},cn=new pa,ou=new qt;function au(n,t,e,i,r,s,a){const o=new Gt(0);let l=s===!0?0:1,f,p,h=null,u=0,_=null;function M(x){let g=x.isScene===!0?x.background:null;return g&&g.isTexture&&(g=(x.backgroundBlurriness>0?e:t).get(g)),g}function S(x){let g=!1;const I=M(x);I===null?c(o,l):I&&I.isColor&&(c(I,1),g=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||g)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function d(x,g){const I=M(g);I&&(I.isCubeTexture||I.mapping===ir)?(p===void 0&&(p=new We(new ha(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:to(He.backgroundCube.uniforms),vertexShader:He.backgroundCube.vertexShader,fragmentShader:He.backgroundCube.fragmentShader,side:we,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(w,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),cn.copy(g.backgroundRotation),cn.x*=-1,cn.y*=-1,cn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(cn.y*=-1,cn.z*=-1),p.material.uniforms.envMap.value=I,p.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ou.makeRotationFromEuler(cn)),p.material.toneMapped=le.getTransfer(I.colorSpace)!==Jt,(h!==I||u!==I.version||_!==n.toneMapping)&&(p.material.needsUpdate=!0,h=I,u=I.version,_=n.toneMapping),p.layers.enableAll(),x.unshift(p,p.geometry,p.material,0,0,null)):I&&I.isTexture&&(f===void 0&&(f=new We(new oa(2,2),new xn({name:"BackgroundMaterial",uniforms:to(He.background.uniforms),vertexShader:He.background.vertexShader,fragmentShader:He.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=I,f.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,f.material.toneMapped=le.getTransfer(I.colorSpace)!==Jt,I.matrixAutoUpdate===!0&&I.updateMatrix(),f.material.uniforms.uvTransform.value.copy(I.matrix),(h!==I||u!==I.version||_!==n.toneMapping)&&(f.material.needsUpdate=!0,h=I,u=I.version,_=n.toneMapping),f.layers.enableAll(),x.unshift(f,f.geometry,f.material,0,0,null))}function c(x,g){x.getRGB(bi,ua(n)),i.buffers.color.setClear(bi.r,bi.g,bi.b,g,a)}function T(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,g=1){o.set(x),l=g,c(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,c(o,l)},render:S,addToRenderList:d,dispose:T}}function cu(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,a=!1;function o(m,y,U,D,B){let q=!1;const G=h(D,U,y);s!==G&&(s=G,f(s.object)),q=_(m,D,U,B),q&&M(m,D,U,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,g(m,y,U,D),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return n.createVertexArray()}function f(m){return n.bindVertexArray(m)}function p(m){return n.deleteVertexArray(m)}function h(m,y,U){const D=U.wireframe===!0;let B=i[m.id];B===void 0&&(B={},i[m.id]=B);let q=B[y.id];q===void 0&&(q={},B[y.id]=q);let G=q[D];return G===void 0&&(G=u(l()),q[D]=G),G}function u(m){const y=[],U=[],D=[];for(let B=0;B<e;B++)y[B]=0,U[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:U,attributeDivisors:D,object:m,attributes:{},index:null}}function _(m,y,U,D){const B=s.attributes,q=y.attributes;let G=0;const Y=U.getAttributes();for(const k in Y)if(Y[k].location>=0){const ht=B[k];let ft=q[k];if(ft===void 0&&(k==="instanceMatrix"&&m.instanceMatrix&&(ft=m.instanceMatrix),k==="instanceColor"&&m.instanceColor&&(ft=m.instanceColor)),ht===void 0||ht.attribute!==ft||ft&&ht.data!==ft.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function M(m,y,U,D){const B={},q=y.attributes;let G=0;const Y=U.getAttributes();for(const k in Y)if(Y[k].location>=0){let ht=q[k];ht===void 0&&(k==="instanceMatrix"&&m.instanceMatrix&&(ht=m.instanceMatrix),k==="instanceColor"&&m.instanceColor&&(ht=m.instanceColor));const ft={};ft.attribute=ht,ht&&ht.data&&(ft.data=ht.data),B[k]=ft,G++}s.attributes=B,s.attributesNum=G,s.index=D}function S(){const m=s.newAttributes;for(let y=0,U=m.length;y<U;y++)m[y]=0}function d(m){c(m,0)}function c(m,y){const U=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;U[m]=1,D[m]===0&&(n.enableVertexAttribArray(m),D[m]=1),B[m]!==y&&(n.vertexAttribDivisor(m,y),B[m]=y)}function T(){const m=s.newAttributes,y=s.enabledAttributes;for(let U=0,D=y.length;U<D;U++)y[U]!==m[U]&&(n.disableVertexAttribArray(U),y[U]=0)}function x(m,y,U,D,B,q,G){G===!0?n.vertexAttribIPointer(m,y,U,B,q):n.vertexAttribPointer(m,y,U,D,B,q)}function g(m,y,U,D){S();const B=D.attributes,q=U.getAttributes(),G=y.defaultAttributeValues;for(const Y in q){const k=q[Y];if(k.location>=0){let lt=B[Y];if(lt===void 0&&(Y==="instanceMatrix"&&m.instanceMatrix&&(lt=m.instanceMatrix),Y==="instanceColor"&&m.instanceColor&&(lt=m.instanceColor)),lt!==void 0){const ht=lt.normalized,ft=lt.itemSize,at=t.get(lt);if(at===void 0)continue;const dt=at.buffer,O=at.type,Z=at.bytesPerElement,et=O===n.INT||O===n.UNSIGNED_INT||lt.gpuType===aa;if(lt.isInterleavedBufferAttribute){const J=lt.data,rt=J.stride,st=lt.offset;if(J.isInstancedInterleavedBuffer){for(let ct=0;ct<k.locationSize;ct++)c(k.location+ct,J.meshPerAttribute);m.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ct=0;ct<k.locationSize;ct++)d(k.location+ct);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let ct=0;ct<k.locationSize;ct++)x(k.location+ct,ft/k.locationSize,O,ht,rt*Z,(st+ft/k.locationSize*ct)*Z,et)}else{if(lt.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)c(k.location+J,lt.meshPerAttribute);m.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let J=0;J<k.locationSize;J++)d(k.location+J);n.bindBuffer(n.ARRAY_BUFFER,dt);for(let J=0;J<k.locationSize;J++)x(k.location+J,ft/k.locationSize,O,ht,ft*Z,ft/k.locationSize*J*Z,et)}}else if(G!==void 0){const ht=G[Y];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(k.location,ht);break;case 3:n.vertexAttrib3fv(k.location,ht);break;case 4:n.vertexAttrib4fv(k.location,ht);break;default:n.vertexAttrib1fv(k.location,ht)}}}}T()}function I(){C();for(const m in i){const y=i[m];for(const U in y){const D=y[U];for(const B in D)p(D[B].object),delete D[B];delete y[U]}delete i[m]}}function w(m){if(i[m.id]===void 0)return;const y=i[m.id];for(const U in y){const D=y[U];for(const B in D)p(D[B].object),delete D[B];delete y[U]}delete i[m.id]}function A(m){for(const y in i){const U=i[y];if(U[m.id]===void 0)continue;const D=U[m.id];for(const B in D)p(D[B].object),delete D[B];delete U[m.id]}}function C(){b(),a=!0,s!==r&&(s=r,f(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:d,disableUnusedAttributes:T}}function lu(n,t,e){let i;function r(f){i=f}function s(f,p){n.drawArrays(i,f,p),e.update(p,i,1)}function a(f,p,h){h!==0&&(n.drawArraysInstanced(i,f,p,h),e.update(p,i,h))}function o(f,p,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,p,0,h);let _=0;for(let M=0;M<h;M++)_+=p[M];e.update(_,i,1)}function l(f,p,h,u){if(h===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<f.length;M++)a(f[M],p[M],u[M]);else{_.multiDrawArraysInstancedWEBGL(i,f,0,p,0,u,0,h);let M=0;for(let S=0;S<h;S++)M+=p[S]*u[S];e.update(M,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fu(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==Ze&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==bn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==mn&&!C)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const p=l(f);p!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),d=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),c=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=M>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:f,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:_,maxVertexTextures:M,maxTextureSize:S,maxCubemapSize:d,maxAttributes:c,maxVertexUniforms:T,maxVaryings:x,maxFragmentUniforms:g,vertexTextures:I,maxSamples:w}}function du(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new us,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const _=h.length!==0||u||i!==0||r;return r=u,i=h.length,_},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=p(h,u,0)},this.setState=function(h,u,_){const M=h.clippingPlanes,S=h.clipIntersection,d=h.clipShadows,c=n.get(h);if(!r||M===null||M.length===0||s&&!d)s?p(null):f();else{const T=s?0:i,x=T*4;let g=c.clippingState||null;l.value=g,g=p(M,u,x,_);for(let I=0;I!==x;++I)g[I]=e[I];c.clippingState=g,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=T}};function f(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function p(h,u,_,M){const S=h!==null?h.length:0;let d=null;if(S!==0){if(d=l.value,M!==!0||d===null){const c=_+S*4,T=u.matrixWorldInverse;o.getNormalMatrix(T),(d===null||d.length<c)&&(d=new Float32Array(c));for(let x=0,g=_;x!==S;++x,g+=4)a.copy(h[x]).applyMatrix4(T,o),a.normal.toArray(d,g),d[g+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,d}}function uu(n){let t=new WeakMap;function e(a,o){return o===Wr?a.mapping=li:o===Xr&&(a.mapping=Wn),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wr||o===Xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const f=new qc(l.height);return f.fromEquirectangularTexture(n,a),t.set(a,f),a.addEventListener("dispose",r),e(f.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Bn=4,ro=[.125,.215,.35,.446,.526,.582],_n=20,gr=new Zc,so=new Gt;let br=null,vr=0,xr=0,Sr=!1;const fn=(1+Math.sqrt(5))/2,Tn=1/fn,oo=[new tt(-fn,Tn,0),new tt(fn,Tn,0),new tt(-Tn,0,fn),new tt(Tn,0,fn),new tt(0,fn,-Tn),new tt(0,fn,Tn),new tt(-1,1,-1),new tt(1,1,-1),new tt(-1,1,1),new tt(1,1,1)],hu=new tt;class ao{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=hu}=s;br=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(br,vr,xr),this._renderer.xr.enabled=Sr,t.scissorTest=!1,vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===li||t.mapping===Wn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),br=this._renderer.getRenderTarget(),vr=this._renderer.getActiveCubeFace(),xr=this._renderer.getActiveMipmapLevel(),Sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:er,format:Ze,colorSpace:nr,depthBuffer:!1},r=co(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=co(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pu(s)),this._blurMaterial=_u(s,t,e)}return r}_compileMaterial(t){const e=new We(this._lodPlanes[0],t);this._renderer.compile(e,gr)}_sceneToCubeUV(t,e,i,r,s){const l=new ki(90,1,e,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,_=h.toneMapping;h.getClearColor(so),h.toneMapping=rn,h.autoClear=!1;const M=new $c({name:"PMREM.Background",side:we,depthWrite:!1,depthTest:!1}),S=new We(new ha,M);let d=!1;const c=t.background;c?c.isColor&&(M.color.copy(c),t.background=null,d=!0):(M.color.copy(so),d=!0);for(let T=0;T<6;T++){const x=T%3;x===0?(l.up.set(0,f[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[T],s.y,s.z)):x===1?(l.up.set(0,0,f[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[T],s.z)):(l.up.set(0,f[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[T]));const g=this._cubeSize;vi(r,x*g,T>2?g:0,g,g),h.setRenderTarget(r),d&&h.render(S,l),h.render(t,l)}S.geometry.dispose(),S.material.dispose(),h.toneMapping=_,h.autoClear=u,t.background=c}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===li||t.mapping===Wn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new We(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;vi(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,gr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=oo[(r-s-1)%oo.length];this._blur(t,s-1,s,a,o)}e.autoClear=i}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const p=3,h=new We(this._lodPlanes[r],f),u=f.uniforms,_=this._sizeLods[i]-1,M=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*_n-1),S=s/M,d=isFinite(s)?1+Math.floor(p*S):_n;d>_n&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${_n}`);const c=[];let T=0;for(let A=0;A<_n;++A){const C=A/S,b=Math.exp(-C*C/2);c.push(b),A===0?T+=b:A<d&&(T+=2*b)}for(let A=0;A<c.length;A++)c[A]=c[A]/T;u.envMap.value=t.texture,u.samples.value=d,u.weights.value=c,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=M,u.mipInt.value=x-i;const g=this._sizeLods[r],I=3*g*(r>x-Bn?r-x+Bn:0),w=4*(this._cubeSize-g);vi(e,I,w,3*g,2*g),l.setRenderTarget(e),l.render(h,gr)}}function pu(n){const t=[],e=[],i=[];let r=n;const s=n-Bn+1+ro.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-Bn?l=ro[a-n+Bn-1]:a===0&&(l=0),i.push(l);const f=1/(o-2),p=-f,h=1+f,u=[p,p,h,p,h,h,p,p,h,h,p,h],_=6,M=6,S=3,d=2,c=1,T=new Float32Array(S*M*_),x=new Float32Array(d*M*_),g=new Float32Array(c*M*_);for(let w=0;w<_;w++){const A=w%3*2/3-1,C=w>2?0:-1,b=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];T.set(b,S*M*w),x.set(u,d*M*w);const m=[w,w,w,w,w,w];g.set(m,c*M*w)}const I=new kn;I.setAttribute("position",new Le(T,S)),I.setAttribute("uv",new Le(x,d)),I.setAttribute("faceIndex",new Le(g,c)),t.push(I),r>Bn&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function co(n,t,e){const i=new zn(n,t,e);return i.texture.mapping=ir,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vi(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function _u(n,t,e){const i=new Float32Array(_n),r=new tt(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:_n,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function lo(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function fo(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ps(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ps(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mu(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,f=l===Wr||l===Xr,p=l===li||l===Wn;if(f||p){let h=t.get(o);const u=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new ao(n)),h=f?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const _=o.image;return f&&_&&_.height>0||p&&_&&r(_)?(e===null&&(e=new ao(n)),h=f?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const f=6;for(let p=0;p<f;p++)o[p]!==void 0&&l++;return l===f}function s(o){const l=o.target;l.removeEventListener("dispose",s);const f=t.get(l);f!==void 0&&(t.delete(l),f.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function gu(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&zi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function bu(n,t,e,i){const r={},s=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const M in u.attributes)t.remove(u.attributes[M]);u.removeEventListener("dispose",a),delete r[u.id];const _=s.get(u);_&&(t.remove(_),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(h,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const _ in u)t.update(u[_],n.ARRAY_BUFFER)}function f(h){const u=[],_=h.index,M=h.attributes.position;let S=0;if(_!==null){const T=_.array;S=_.version;for(let x=0,g=T.length;x<g;x+=3){const I=T[x+0],w=T[x+1],A=T[x+2];u.push(I,w,w,A,A,I)}}else if(M!==void 0){const T=M.array;S=M.version;for(let x=0,g=T.length/3-1;x<g;x+=3){const I=x+0,w=x+1,A=x+2;u.push(I,w,w,A,A,I)}}else return;const d=new(Jc(u)?jc:Qc)(u,1);d.version=S;const c=s.get(h);c&&t.remove(c),s.set(h,d)}function p(h){const u=s.get(h);if(u){const _=h.index;_!==null&&u.version<_.version&&f(h)}else f(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:p}}function vu(n,t,e){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,_){n.drawElements(i,_,s,u*a),e.update(_,i,1)}function f(u,_,M){M!==0&&(n.drawElementsInstanced(i,_,s,u*a,M),e.update(_,i,M))}function p(u,_,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,s,u,0,M);let d=0;for(let c=0;c<M;c++)d+=_[c];e.update(d,i,1)}function h(u,_,M,S){if(M===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let c=0;c<u.length;c++)f(u[c]/a,_[c],S[c]);else{d.multiDrawElementsInstancedWEBGL(i,_,0,s,u,0,S,0,M);let c=0;for(let T=0;T<M;T++)c+=_[T]*S[T];e.update(c,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=f,this.renderMultiDraw=p,this.renderMultiDrawInstances=h}function xu(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function Su(n,t,e){const i=new WeakMap,r=new de;function s(a,o,l){const f=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let u=i.get(o);if(u===void 0||u.count!==h){let b=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,S=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let x=0;_===!0&&(x=1),M===!0&&(x=2),S===!0&&(x=3);let g=o.attributes.position.count*x,I=1;g>t.maxTextureSize&&(I=Math.ceil(g/t.maxTextureSize),g=t.maxTextureSize);const w=new Float32Array(g*I*4*h),A=new da(w,g,I,h);A.type=mn,A.needsUpdate=!0;const C=x*4;for(let m=0;m<h;m++){const y=d[m],U=c[m],D=T[m],B=g*I*4*m;for(let q=0;q<y.count;q++){const G=q*C;_===!0&&(r.fromBufferAttribute(y,q),w[B+G+0]=r.x,w[B+G+1]=r.y,w[B+G+2]=r.z,w[B+G+3]=0),M===!0&&(r.fromBufferAttribute(U,q),w[B+G+4]=r.x,w[B+G+5]=r.y,w[B+G+6]=r.z,w[B+G+7]=0),S===!0&&(r.fromBufferAttribute(D,q),w[B+G+8]=r.x,w[B+G+9]=r.y,w[B+G+10]=r.z,w[B+G+11]=D.itemSize===4?r.w:1)}}u={count:h,texture:A,size:new oe(g,I)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let _=0;for(let S=0;S<f.length;S++)_+=f[S];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(n,"morphTargetBaseInfluence",M),l.getUniforms().setValue(n,"morphTargetInfluences",f)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function Eu(n,t,e,i){let r=new WeakMap;function s(l){const f=i.render.frame,p=l.geometry,h=t.get(l,p);if(r.get(h)!==f&&(t.update(h),r.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==f&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,f))),l.isSkinnedMesh){const u=l.skeleton;r.get(u)!==f&&(u.update(),r.set(u,f))}return h}function a(){r=new WeakMap}function o(l){const f=l.target;f.removeEventListener("dispose",o),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:s,dispose:a}}const Sa=new sa,uo=new ta(1,1),Ea=new da,Ma=new fl,Ta=new ll,ho=[],po=[],_o=new Float32Array(16),mo=new Float32Array(9),go=new Float32Array(4);function qn(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=ho[r];if(s===void 0&&(s=new Float32Array(r),ho[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function he(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function rr(n,t){let e=po[t];e===void 0&&(e=new Int32Array(t),po[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Mu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Tu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;n.uniform2fv(this.addr,t),he(e,t)}}function Au(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ue(e,t))return;n.uniform3fv(this.addr,t),he(e,t)}}function yu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;n.uniform4fv(this.addr,t),he(e,t)}}function wu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;go.set(i),n.uniformMatrix2fv(this.addr,!1,go),he(e,i)}}function Ru(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;mo.set(i),n.uniformMatrix3fv(this.addr,!1,mo),he(e,i)}}function Cu(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ue(e,i))return;_o.set(i),n.uniformMatrix4fv(this.addr,!1,_o),he(e,i)}}function Iu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Pu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;n.uniform2iv(this.addr,t),he(e,t)}}function Uu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;n.uniform3iv(this.addr,t),he(e,t)}}function Du(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;n.uniform4iv(this.addr,t),he(e,t)}}function Lu(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Nu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ue(e,t))return;n.uniform2uiv(this.addr,t),he(e,t)}}function Fu(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ue(e,t))return;n.uniform3uiv(this.addr,t),he(e,t)}}function Ou(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ue(e,t))return;n.uniform4uiv(this.addr,t),he(e,t)}}function Bu(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(uo.compareFunction=ea,s=uo):s=Sa,e.setTexture2D(t||s,r)}function Vu(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Ma,r)}function Gu(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Ta,r)}function Hu(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Ea,r)}function zu(n){switch(n){case 5126:return Mu;case 35664:return Tu;case 35665:return Au;case 35666:return yu;case 35674:return wu;case 35675:return Ru;case 35676:return Cu;case 5124:case 35670:return Iu;case 35667:case 35671:return Pu;case 35668:case 35672:return Uu;case 35669:case 35673:return Du;case 5125:return Lu;case 36294:return Nu;case 36295:return Fu;case 36296:return Ou;case 35678:case 36198:case 36298:case 36306:case 35682:return Bu;case 35679:case 36299:case 36307:return Vu;case 35680:case 36300:case 36308:case 36293:return Gu;case 36289:case 36303:case 36311:case 36292:return Hu}}function ku(n,t){n.uniform1fv(this.addr,t)}function Wu(n,t){const e=qn(t,this.size,2);n.uniform2fv(this.addr,e)}function Xu(n,t){const e=qn(t,this.size,3);n.uniform3fv(this.addr,e)}function qu(n,t){const e=qn(t,this.size,4);n.uniform4fv(this.addr,e)}function Ku(n,t){const e=qn(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Yu(n,t){const e=qn(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Zu(n,t){const e=qn(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function $u(n,t){n.uniform1iv(this.addr,t)}function ju(n,t){n.uniform2iv(this.addr,t)}function Qu(n,t){n.uniform3iv(this.addr,t)}function Ju(n,t){n.uniform4iv(this.addr,t)}function th(n,t){n.uniform1uiv(this.addr,t)}function eh(n,t){n.uniform2uiv(this.addr,t)}function nh(n,t){n.uniform3uiv(this.addr,t)}function ih(n,t){n.uniform4uiv(this.addr,t)}function rh(n,t,e){const i=this.cache,r=t.length,s=rr(e,r);ue(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Sa,s[a])}function sh(n,t,e){const i=this.cache,r=t.length,s=rr(e,r);ue(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ma,s[a])}function oh(n,t,e){const i=this.cache,r=t.length,s=rr(e,r);ue(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Ta,s[a])}function ah(n,t,e){const i=this.cache,r=t.length,s=rr(e,r);ue(i,s)||(n.uniform1iv(this.addr,s),he(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ea,s[a])}function ch(n){switch(n){case 5126:return ku;case 35664:return Wu;case 35665:return Xu;case 35666:return qu;case 35674:return Ku;case 35675:return Yu;case 35676:return Zu;case 5124:case 35670:return $u;case 35667:case 35671:return ju;case 35668:case 35672:return Qu;case 35669:case 35673:return Ju;case 5125:return th;case 36294:return eh;case 36295:return nh;case 36296:return ih;case 35678:case 36198:case 36298:case 36306:case 35682:return rh;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return ah}}class lh{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=zu(e.type)}}class fh{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ch(e.type)}}class dh{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function bo(n,t){n.seq.push(t),n.map[t.id]=t}function uh(n,t,e){const i=n.name,r=i.length;for(Er.lastIndex=0;;){const s=Er.exec(i),a=Er.lastIndex;let o=s[1];const l=s[2]==="]",f=s[3];if(l&&(o=o|0),f===void 0||f==="["&&a+2===r){bo(e,f===void 0?new lh(o,n,t):new fh(o,n,t));break}else{let h=e.map[o];h===void 0&&(h=new dh(o),bo(e,h)),e=h}}}class Xi{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);uh(s,a,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function vo(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hh=37297;let ph=0;function _h(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const xo=new Xt;function mh(n){le._getMatrix(xo,le.workingColorSpace,n);const t=`mat3( ${xo.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case _a:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function So(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+_h(n.getShaderSource(t),a)}else return r}function gh(n,t){const e=mh(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function bh(n,t){let e;switch(t){case cl:e="Linear";break;case al:e="Reinhard";break;case ol:e="Cineon";break;case sl:e="ACESFilmic";break;case rl:e="AgX";break;case il:e="Neutral";break;case nl:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const xi=new tt;function vh(){le.getLuminanceCoefficients(xi);const n=xi.x.toFixed(4),t=xi.y.toFixed(4),e=xi.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xh(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ri).join(`
`)}function Sh(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Eh(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ri(n){return n!==""}function Eo(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mo(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Mh=/^[ \t]*#include +<([\w\d./]+)>/gm;function qr(n){return n.replace(Mh,Ah)}const Th=new Map;function Ah(n,t){let e=Vt[t];if(e===void 0){const i=Th.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return qr(e)}const yh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function To(n){return n.replace(yh,wh)}function wh(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ao(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rh(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===na?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===el?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===qe&&(t="SHADOWMAP_TYPE_VSM"),t}function Ch(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case li:case Wn:t="ENVMAP_TYPE_CUBE";break;case ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ih(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Wn:t="ENVMAP_MODE_REFRACTION";break}return t}function Ph(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case pl:t="ENVMAP_BLENDING_MULTIPLY";break;case hl:t="ENVMAP_BLENDING_MIX";break;case ul:t="ENVMAP_BLENDING_ADD";break}return t}function Uh(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Dh(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Rh(e),f=Ch(e),p=Ih(e),h=Ph(e),u=Uh(e),_=xh(e),M=Sh(s),S=r.createProgram();let d,c,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ri).join(`
`),d.length>0&&(d+=`
`),c=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M].filter(ri).join(`
`),c.length>0&&(c+=`
`)):(d=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+p:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ri).join(`
`),c=[Ao(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,M,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+p:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==rn?"#define TONE_MAPPING":"",e.toneMapping!==rn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==rn?bh("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,gh("linearToOutputTexel",e.outputColorSpace),vh(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ri).join(`
`)),a=qr(a),a=Eo(a,e),a=Mo(a,e),o=qr(o),o=Eo(o,e),o=Mo(o,e),a=To(a),o=To(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,d=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,c=["#define varying in",e.glslVersion===no?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===no?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const x=T+d+a,g=T+c+o,I=vo(r,r.VERTEX_SHADER,x),w=vo(r,r.FRAGMENT_SHADER,g);r.attachShader(S,I),r.attachShader(S,w),e.index0AttributeName!==void 0?r.bindAttribLocation(S,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(y){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(S).trim(),D=r.getShaderInfoLog(I).trim(),B=r.getShaderInfoLog(w).trim();let q=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(q=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,I,w);else{const Y=So(r,I,"vertex"),k=So(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+U+`
`+Y+`
`+k)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(D===""||B==="")&&(G=!1);G&&(y.diagnostics={runnable:q,programLog:U,vertexShader:{log:D,prefix:d},fragmentShader:{log:B,prefix:c}})}r.deleteShader(I),r.deleteShader(w),C=new Xi(r,S),b=Eh(r,S)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let m=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return m===!1&&(m=r.getProgramParameter(S,hh)),m},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ph++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=w,this}let Lh=0;class Nh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Fh(t),e.set(t,i)),i}}class Fh{constructor(t){this.id=Lh++,this.code=t,this.usedTimes=0}}function Oh(n,t,e,i,r,s,a){const o=new tl,l=new Nh,f=new Set,p=[],h=r.logarithmicDepthBuffer,u=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(b){return f.add(b),b===0?"uv":`uv${b}`}function d(b,m,y,U,D){const B=U.fog,q=D.geometry,G=b.isMeshStandardMaterial?U.environment:null,Y=(b.isMeshStandardMaterial?e:t).get(b.envMap||G),k=Y&&Y.mapping===ir?Y.image.height:null,lt=M[b.type];b.precision!==null&&(_=r.getMaxPrecision(b.precision),_!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",_,"instead."));const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,ft=ht!==void 0?ht.length:0;let at=0;q.morphAttributes.position!==void 0&&(at=1),q.morphAttributes.normal!==void 0&&(at=2),q.morphAttributes.color!==void 0&&(at=3);let dt,O,Z,et;if(lt){const Zt=He[lt];dt=Zt.vertexShader,O=Zt.fragmentShader}else dt=b.vertexShader,O=b.fragmentShader,l.update(b),Z=l.getVertexShaderID(b),et=l.getFragmentShaderID(b);const J=n.getRenderTarget(),rt=n.state.buffers.depth.getReversed(),st=D.isInstancedMesh===!0,ct=D.isBatchedMesh===!0,Ct=!!b.map,Nt=!!b.matcap,Rt=!!Y,P=!!b.aoMap,jt=!!b.lightMap,It=!!b.bumpMap,Ft=!!b.normalMap,Mt=!!b.displacementMap,$t=!!b.emissiveMap,At=!!b.metalnessMap,R=!!b.roughnessMap,v=b.anisotropy>0,V=b.clearcoat>0,$=b.dispersion>0,Q=b.iridescence>0,K=b.sheen>0,Tt=b.transmission>0,pt=v&&!!b.anisotropyMap,vt=V&&!!b.clearcoatMap,zt=V&&!!b.clearcoatNormalMap,it=V&&!!b.clearcoatRoughnessMap,xt=Q&&!!b.iridescenceMap,Pt=Q&&!!b.iridescenceThicknessMap,Dt=K&&!!b.sheenColorMap,St=K&&!!b.sheenRoughnessMap,Ht=!!b.specularMap,Bt=!!b.specularColorMap,Qt=!!b.specularIntensityMap,L=Tt&&!!b.transmissionMap,_t=Tt&&!!b.thicknessMap,X=!!b.gradientMap,j=!!b.alphaMap,gt=b.alphaTest>0,mt=!!b.alphaHash,Ot=!!b.extensions;let re=rn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(re=n.toneMapping);const me={shaderID:lt,shaderType:b.type,shaderName:b.name,vertexShader:dt,fragmentShader:O,defines:b.defines,customVertexShaderID:Z,customFragmentShaderID:et,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:_,batching:ct,batchingColor:ct&&D._colorsTexture!==null,instancing:st,instancingColor:st&&D.instanceColor!==null,instancingMorph:st&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?n.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:nr,alphaToCoverage:!!b.alphaToCoverage,map:Ct,matcap:Nt,envMap:Rt,envMapMode:Rt&&Y.mapping,envMapCubeUVHeight:k,aoMap:P,lightMap:jt,bumpMap:It,normalMap:Ft,displacementMap:u&&Mt,emissiveMap:$t,normalMapObjectSpace:Ft&&b.normalMapType===Yc,normalMapTangentSpace:Ft&&b.normalMapType===Kc,metalnessMap:At,roughnessMap:R,anisotropy:v,anisotropyMap:pt,clearcoat:V,clearcoatMap:vt,clearcoatNormalMap:zt,clearcoatRoughnessMap:it,dispersion:$,iridescence:Q,iridescenceMap:xt,iridescenceThicknessMap:Pt,sheen:K,sheenColorMap:Dt,sheenRoughnessMap:St,specularMap:Ht,specularColorMap:Bt,specularIntensityMap:Qt,transmission:Tt,transmissionMap:L,thicknessMap:_t,gradientMap:X,opaque:b.transparent===!1&&b.blending===Wi&&b.alphaToCoverage===!1,alphaMap:j,alphaTest:gt,alphaHash:mt,combine:b.combine,mapUv:Ct&&S(b.map.channel),aoMapUv:P&&S(b.aoMap.channel),lightMapUv:jt&&S(b.lightMap.channel),bumpMapUv:It&&S(b.bumpMap.channel),normalMapUv:Ft&&S(b.normalMap.channel),displacementMapUv:Mt&&S(b.displacementMap.channel),emissiveMapUv:$t&&S(b.emissiveMap.channel),metalnessMapUv:At&&S(b.metalnessMap.channel),roughnessMapUv:R&&S(b.roughnessMap.channel),anisotropyMapUv:pt&&S(b.anisotropyMap.channel),clearcoatMapUv:vt&&S(b.clearcoatMap.channel),clearcoatNormalMapUv:zt&&S(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&S(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&S(b.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&S(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&S(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&S(b.sheenRoughnessMap.channel),specularMapUv:Ht&&S(b.specularMap.channel),specularColorMapUv:Bt&&S(b.specularColorMap.channel),specularIntensityMapUv:Qt&&S(b.specularIntensityMap.channel),transmissionMapUv:L&&S(b.transmissionMap.channel),thicknessMapUv:_t&&S(b.thicknessMap.channel),alphaMapUv:j&&S(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Ft||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!q.attributes.uv&&(Ct||j),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:rt,skinning:D.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:at,numDirLights:m.directional.length,numPointLights:m.point.length,numSpotLights:m.spot.length,numSpotLightMaps:m.spotLightMap.length,numRectAreaLights:m.rectArea.length,numHemiLights:m.hemi.length,numDirLightShadows:m.directionalShadowMap.length,numPointLightShadows:m.pointShadowMap.length,numSpotLightShadows:m.spotShadowMap.length,numSpotLightShadowsWithMaps:m.numSpotLightShadowsWithMaps,numLightProbes:m.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&y.length>0,shadowMapType:n.shadowMap.type,toneMapping:re,decodeVideoTexture:Ct&&b.map.isVideoTexture===!0&&le.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:$t&&b.emissiveMap.isVideoTexture===!0&&le.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ke,flipSided:b.side===we,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||ct)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return me.vertexUv1s=f.has(1),me.vertexUv2s=f.has(2),me.vertexUv3s=f.has(3),f.clear(),me}function c(b){const m=[];if(b.shaderID?m.push(b.shaderID):(m.push(b.customVertexShaderID),m.push(b.customFragmentShaderID)),b.defines!==void 0)for(const y in b.defines)m.push(y),m.push(b.defines[y]);return b.isRawShaderMaterial===!1&&(T(m,b),x(m,b),m.push(n.outputColorSpace)),m.push(b.customProgramCacheKey),m.join()}function T(b,m){b.push(m.precision),b.push(m.outputColorSpace),b.push(m.envMapMode),b.push(m.envMapCubeUVHeight),b.push(m.mapUv),b.push(m.alphaMapUv),b.push(m.lightMapUv),b.push(m.aoMapUv),b.push(m.bumpMapUv),b.push(m.normalMapUv),b.push(m.displacementMapUv),b.push(m.emissiveMapUv),b.push(m.metalnessMapUv),b.push(m.roughnessMapUv),b.push(m.anisotropyMapUv),b.push(m.clearcoatMapUv),b.push(m.clearcoatNormalMapUv),b.push(m.clearcoatRoughnessMapUv),b.push(m.iridescenceMapUv),b.push(m.iridescenceThicknessMapUv),b.push(m.sheenColorMapUv),b.push(m.sheenRoughnessMapUv),b.push(m.specularMapUv),b.push(m.specularColorMapUv),b.push(m.specularIntensityMapUv),b.push(m.transmissionMapUv),b.push(m.thicknessMapUv),b.push(m.combine),b.push(m.fogExp2),b.push(m.sizeAttenuation),b.push(m.morphTargetsCount),b.push(m.morphAttributeCount),b.push(m.numDirLights),b.push(m.numPointLights),b.push(m.numSpotLights),b.push(m.numSpotLightMaps),b.push(m.numHemiLights),b.push(m.numRectAreaLights),b.push(m.numDirLightShadows),b.push(m.numPointLightShadows),b.push(m.numSpotLightShadows),b.push(m.numSpotLightShadowsWithMaps),b.push(m.numLightProbes),b.push(m.shadowMapType),b.push(m.toneMapping),b.push(m.numClippingPlanes),b.push(m.numClipIntersection),b.push(m.depthPacking)}function x(b,m){o.disableAll(),m.supportsVertexTextures&&o.enable(0),m.instancing&&o.enable(1),m.instancingColor&&o.enable(2),m.instancingMorph&&o.enable(3),m.matcap&&o.enable(4),m.envMap&&o.enable(5),m.normalMapObjectSpace&&o.enable(6),m.normalMapTangentSpace&&o.enable(7),m.clearcoat&&o.enable(8),m.iridescence&&o.enable(9),m.alphaTest&&o.enable(10),m.vertexColors&&o.enable(11),m.vertexAlphas&&o.enable(12),m.vertexUv1s&&o.enable(13),m.vertexUv2s&&o.enable(14),m.vertexUv3s&&o.enable(15),m.vertexTangents&&o.enable(16),m.anisotropy&&o.enable(17),m.alphaHash&&o.enable(18),m.batching&&o.enable(19),m.dispersion&&o.enable(20),m.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),m.fog&&o.enable(0),m.useFog&&o.enable(1),m.flatShading&&o.enable(2),m.logarithmicDepthBuffer&&o.enable(3),m.reverseDepthBuffer&&o.enable(4),m.skinning&&o.enable(5),m.morphTargets&&o.enable(6),m.morphNormals&&o.enable(7),m.morphColors&&o.enable(8),m.premultipliedAlpha&&o.enable(9),m.shadowMapEnabled&&o.enable(10),m.doubleSided&&o.enable(11),m.flipSided&&o.enable(12),m.useDepthPacking&&o.enable(13),m.dithering&&o.enable(14),m.transmission&&o.enable(15),m.sheen&&o.enable(16),m.opaque&&o.enable(17),m.pointsUvs&&o.enable(18),m.decodeVideoTexture&&o.enable(19),m.decodeVideoTextureEmissive&&o.enable(20),m.alphaToCoverage&&o.enable(21),b.push(o.mask)}function g(b){const m=M[b.type];let y;if(m){const U=He[m];y=hs.clone(U.uniforms)}else y=b.uniforms;return y}function I(b,m){let y;for(let U=0,D=p.length;U<D;U++){const B=p[U];if(B.cacheKey===m){y=B,++y.usedTimes;break}}return y===void 0&&(y=new Dh(n,m,b,s),p.push(y)),y}function w(b){if(--b.usedTimes===0){const m=p.indexOf(b);p[m]=p[p.length-1],p.pop(),b.destroy()}}function A(b){l.remove(b)}function C(){l.dispose()}return{getParameters:d,getProgramCacheKey:c,getUniforms:g,acquireProgram:I,releaseProgram:w,releaseShaderCache:A,programs:p,dispose:C}}function Bh(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function Vh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function yo(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function wo(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(h,u,_,M,S,d){let c=n[t];return c===void 0?(c={id:h.id,object:h,geometry:u,material:_,groupOrder:M,renderOrder:h.renderOrder,z:S,group:d},n[t]=c):(c.id=h.id,c.object=h,c.geometry=u,c.material=_,c.groupOrder=M,c.renderOrder=h.renderOrder,c.z=S,c.group=d),t++,c}function o(h,u,_,M,S,d){const c=a(h,u,_,M,S,d);_.transmission>0?i.push(c):_.transparent===!0?r.push(c):e.push(c)}function l(h,u,_,M,S,d){const c=a(h,u,_,M,S,d);_.transmission>0?i.unshift(c):_.transparent===!0?r.unshift(c):e.unshift(c)}function f(h,u){e.length>1&&e.sort(h||Vh),i.length>1&&i.sort(u||yo),r.length>1&&r.sort(u||yo)}function p(){for(let h=t,u=n.length;h<u;h++){const _=n[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:p,sort:f}}function Gh(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new wo,n.set(i,[a])):r>=s.length?(a=new wo,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Hh(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new tt,color:new Gt};break;case"SpotLight":e={position:new tt,direction:new tt,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new tt,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new tt,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new tt,halfWidth:new tt,halfHeight:new tt};break}return n[t.id]=e,e}}}function zh(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let kh=0;function Wh(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Xh(n){const t=new Hh,e=zh(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new tt);const r=new tt,s=new qt,a=new qt;function o(f){let p=0,h=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let _=0,M=0,S=0,d=0,c=0,T=0,x=0,g=0,I=0,w=0,A=0;f.sort(Wh);for(let b=0,m=f.length;b<m;b++){const y=f[b],U=y.color,D=y.intensity,B=y.distance,q=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)p+=U.r*D,h+=U.g*D,u+=U.b*D;else if(y.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(y.sh.coefficients[G],D);A++}else if(y.isDirectionalLight){const G=t.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Y=y.shadow,k=e.get(y);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.directionalShadow[_]=k,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=y.shadow.matrix,T++}i.directional[_]=G,_++}else if(y.isSpotLight){const G=t.get(y);G.position.setFromMatrixPosition(y.matrixWorld),G.color.copy(U).multiplyScalar(D),G.distance=B,G.coneCos=Math.cos(y.angle),G.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),G.decay=y.decay,i.spot[S]=G;const Y=y.shadow;if(y.map&&(i.spotLightMap[I]=y.map,I++,Y.updateMatrices(y),y.castShadow&&w++),i.spotLightMatrix[S]=Y.matrix,y.castShadow){const k=e.get(y);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,i.spotShadow[S]=k,i.spotShadowMap[S]=q,g++}S++}else if(y.isRectAreaLight){const G=t.get(y);G.color.copy(U).multiplyScalar(D),G.halfWidth.set(y.width*.5,0,0),G.halfHeight.set(0,y.height*.5,0),i.rectArea[d]=G,d++}else if(y.isPointLight){const G=t.get(y);if(G.color.copy(y.color).multiplyScalar(y.intensity),G.distance=y.distance,G.decay=y.decay,y.castShadow){const Y=y.shadow,k=e.get(y);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,i.pointShadow[M]=k,i.pointShadowMap[M]=q,i.pointShadowMatrix[M]=y.shadow.matrix,x++}i.point[M]=G,M++}else if(y.isHemisphereLight){const G=t.get(y);G.skyColor.copy(y.color).multiplyScalar(D),G.groundColor.copy(y.groundColor).multiplyScalar(D),i.hemi[c]=G,c++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==_||C.pointLength!==M||C.spotLength!==S||C.rectAreaLength!==d||C.hemiLength!==c||C.numDirectionalShadows!==T||C.numPointShadows!==x||C.numSpotShadows!==g||C.numSpotMaps!==I||C.numLightProbes!==A)&&(i.directional.length=_,i.spot.length=S,i.rectArea.length=d,i.point.length=M,i.hemi.length=c,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=g,i.spotShadowMap.length=g,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=g+I-w,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,C.directionalLength=_,C.pointLength=M,C.spotLength=S,C.rectAreaLength=d,C.hemiLength=c,C.numDirectionalShadows=T,C.numPointShadows=x,C.numSpotShadows=g,C.numSpotMaps=I,C.numLightProbes=A,i.version=kh++)}function l(f,p){let h=0,u=0,_=0,M=0,S=0;const d=p.matrixWorldInverse;for(let c=0,T=f.length;c<T;c++){const x=f[c];if(x.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),h++}else if(x.isSpotLight){const g=i.spot[_];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(d),g.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(r),g.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const g=i.rectArea[M];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(d),a.identity(),s.copy(x.matrixWorld),s.premultiply(d),a.extractRotation(s),g.halfWidth.set(x.width*.5,0,0),g.halfHeight.set(0,x.height*.5,0),g.halfWidth.applyMatrix4(a),g.halfHeight.applyMatrix4(a),M++}else if(x.isPointLight){const g=i.point[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){const g=i.hemi[S];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(d),S++}}}return{setup:o,setupView:l,state:i}}function Ro(n){const t=new Xh(n),e=[],i=[];function r(p){f.camera=p,e.length=0,i.length=0}function s(p){e.push(p)}function a(p){i.push(p)}function o(){t.setup(e)}function l(p){t.setupView(e,p)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:f,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function qh(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ro(n),t.set(r,[o])):s>=a.length?(o=new Ro(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const Kh=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yh=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Zh(n,t,e){let i=new Jo;const r=new oe,s=new oe,a=new de,o=new Ic({depthPacking:Pc}),l=new Uc,f={},p=e.maxTextureSize,h={[vn]:we,[we]:vn,[ke]:ke},u=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:Kh,fragmentShader:Yh}),_=u.clone();_.defines.HORIZONTAL_PASS=1;const M=new kn;M.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new We(M,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let c=this.type;this.render=function(w,A,C){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),m=n.getActiveCubeFace(),y=n.getActiveMipmapLevel(),U=n.state;U.setBlending(gn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const D=c!==qe&&this.type===qe,B=c===qe&&this.type!==qe;for(let q=0,G=w.length;q<G;q++){const Y=w[q],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const lt=k.getFrameExtents();if(r.multiply(lt),s.copy(k.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/lt.x),r.x=s.x*lt.x,k.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/lt.y),r.y=s.y*lt.y,k.mapSize.y=s.y)),k.map===null||D===!0||B===!0){const ft=this.type!==qe?{minFilter:si,magFilter:si}:{};k.map!==null&&k.map.dispose(),k.map=new zn(r.x,r.y,ft),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ht=k.getViewportCount();for(let ft=0;ft<ht;ft++){const at=k.getViewport(ft);a.set(s.x*at.x,s.y*at.y,s.x*at.z,s.y*at.w),U.viewport(a),k.updateMatrices(Y,ft),i=k.getFrustum(),g(A,C,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===qe&&T(k,C),k.needsUpdate=!1}c=this.type,d.needsUpdate=!1,n.setRenderTarget(b,m,y)};function T(w,A){const C=t.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,_.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,_.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new zn(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,C,u,S,null),_.uniforms.shadow_pass.value=w.mapPass.texture,_.uniforms.resolution.value=w.mapSize,_.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,C,_,S,null)}function x(w,A,C,b){let m=null;const y=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)m=y;else if(m=C.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const U=m.uuid,D=A.uuid;let B=f[U];B===void 0&&(B={},f[U]=B);let q=B[D];q===void 0&&(q=m.clone(),B[D]=q,A.addEventListener("dispose",I)),m=q}if(m.visible=A.visible,m.wireframe=A.wireframe,b===qe?m.side=A.shadowSide!==null?A.shadowSide:A.side:m.side=A.shadowSide!==null?A.shadowSide:h[A.side],m.alphaMap=A.alphaMap,m.alphaTest=A.alphaTest,m.map=A.map,m.clipShadows=A.clipShadows,m.clippingPlanes=A.clippingPlanes,m.clipIntersection=A.clipIntersection,m.displacementMap=A.displacementMap,m.displacementScale=A.displacementScale,m.displacementBias=A.displacementBias,m.wireframeLinewidth=A.wireframeLinewidth,m.linewidth=A.linewidth,C.isPointLight===!0&&m.isMeshDistanceMaterial===!0){const U=n.properties.get(m);U.light=C}return m}function g(w,A,C,b,m){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&m===qe)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const D=t.update(w),B=w.material;if(Array.isArray(B)){const q=D.groups;for(let G=0,Y=q.length;G<Y;G++){const k=q[G],lt=B[k.materialIndex];if(lt&&lt.visible){const ht=x(w,lt,b,m);w.onBeforeShadow(n,w,A,C,D,ht,k),n.renderBufferDirect(C,null,D,ht,w,k),w.onAfterShadow(n,w,A,C,D,ht,k)}}}else if(B.visible){const q=x(w,B,b,m);w.onBeforeShadow(n,w,A,C,D,q,null),n.renderBufferDirect(C,null,D,q,w,null),w.onAfterShadow(n,w,A,C,D,q,null)}}const U=w.children;for(let D=0,B=U.length;D<B;D++)g(U[D],A,C,b,m)}function I(w){w.target.removeEventListener("dispose",I);for(const C in f){const b=f[C],m=w.target.uuid;m in b&&(b[m].dispose(),delete b[m])}}}const $h={[kr]:zr,[Hr]:Br,[Gr]:Or,[ji]:Vr,[zr]:kr,[Br]:Hr,[Or]:Gr,[Vr]:ji};function jh(n,t){function e(){let L=!1;const _t=new de;let X=null;const j=new de(0,0,0,0);return{setMask:function(gt){X!==gt&&!L&&(n.colorMask(gt,gt,gt,gt),X=gt)},setLocked:function(gt){L=gt},setClear:function(gt,mt,Ot,re,me){me===!0&&(gt*=re,mt*=re,Ot*=re),_t.set(gt,mt,Ot,re),j.equals(_t)===!1&&(n.clearColor(gt,mt,Ot,re),j.copy(_t))},reset:function(){L=!1,X=null,j.set(-1,0,0,0)}}}function i(){let L=!1,_t=!1,X=null,j=null,gt=null;return{setReversed:function(mt){if(_t!==mt){const Ot=t.get("EXT_clip_control");mt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),_t=mt;const re=gt;gt=null,this.setClear(re)}},getReversed:function(){return _t},setTest:function(mt){mt?J(n.DEPTH_TEST):rt(n.DEPTH_TEST)},setMask:function(mt){X!==mt&&!L&&(n.depthMask(mt),X=mt)},setFunc:function(mt){if(_t&&(mt=$h[mt]),j!==mt){switch(mt){case kr:n.depthFunc(n.NEVER);break;case zr:n.depthFunc(n.ALWAYS);break;case Hr:n.depthFunc(n.LESS);break;case ji:n.depthFunc(n.LEQUAL);break;case Gr:n.depthFunc(n.EQUAL);break;case Vr:n.depthFunc(n.GEQUAL);break;case Br:n.depthFunc(n.GREATER);break;case Or:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=mt}},setLocked:function(mt){L=mt},setClear:function(mt){gt!==mt&&(_t&&(mt=1-mt),n.clearDepth(mt),gt=mt)},reset:function(){L=!1,X=null,j=null,gt=null,_t=!1}}}function r(){let L=!1,_t=null,X=null,j=null,gt=null,mt=null,Ot=null,re=null,me=null;return{setTest:function(Zt){L||(Zt?J(n.STENCIL_TEST):rt(n.STENCIL_TEST))},setMask:function(Zt){_t!==Zt&&!L&&(n.stencilMask(Zt),_t=Zt)},setFunc:function(Zt,Ne,Xe){(X!==Zt||j!==Ne||gt!==Xe)&&(n.stencilFunc(Zt,Ne,Xe),X=Zt,j=Ne,gt=Xe)},setOp:function(Zt,Ne,Xe){(mt!==Zt||Ot!==Ne||re!==Xe)&&(n.stencilOp(Zt,Ne,Xe),mt=Zt,Ot=Ne,re=Xe)},setLocked:function(Zt){L=Zt},setClear:function(Zt){me!==Zt&&(n.clearStencil(Zt),me=Zt)},reset:function(){L=!1,_t=null,X=null,j=null,gt=null,mt=null,Ot=null,re=null,me=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,f=new WeakMap;let p={},h={},u=new WeakMap,_=[],M=null,S=!1,d=null,c=null,T=null,x=null,g=null,I=null,w=null,A=new Gt(0,0,0),C=0,b=!1,m=null,y=null,U=null,D=null,B=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Y=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),G=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),G=Y>=2);let lt=null,ht={};const ft=n.getParameter(n.SCISSOR_BOX),at=n.getParameter(n.VIEWPORT),dt=new de().fromArray(ft),O=new de().fromArray(at);function Z(L,_t,X,j){const gt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(L,mt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<X;Ot++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(_t,0,n.RGBA,1,1,j,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(_t+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return mt}const et={};et[n.TEXTURE_2D]=Z(n.TEXTURE_2D,n.TEXTURE_2D,1),et[n.TEXTURE_CUBE_MAP]=Z(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[n.TEXTURE_2D_ARRAY]=Z(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),et[n.TEXTURE_3D]=Z(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(n.DEPTH_TEST),a.setFunc(ji),It(!1),Ft($s),J(n.CULL_FACE),P(gn);function J(L){p[L]!==!0&&(n.enable(L),p[L]=!0)}function rt(L){p[L]!==!1&&(n.disable(L),p[L]=!1)}function st(L,_t){return h[L]!==_t?(n.bindFramebuffer(L,_t),h[L]=_t,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=_t),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=_t),!0):!1}function ct(L,_t){let X=_,j=!1;if(L){X=u.get(_t),X===void 0&&(X=[],u.set(_t,X));const gt=L.textures;if(X.length!==gt.length||X[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,Ot=gt.length;mt<Ot;mt++)X[mt]=n.COLOR_ATTACHMENT0+mt;X.length=gt.length,j=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,j=!0);j&&n.drawBuffers(X)}function Ct(L){return M!==L?(n.useProgram(L),M=L,!0):!1}const Nt={[Zn]:n.FUNC_ADD,[ic]:n.FUNC_SUBTRACT,[nc]:n.FUNC_REVERSE_SUBTRACT};Nt[_l]=n.MIN,Nt[ml]=n.MAX;const Rt={[bc]:n.ZERO,[gc]:n.ONE,[mc]:n.SRC_COLOR,[_c]:n.SRC_ALPHA,[pc]:n.SRC_ALPHA_SATURATE,[hc]:n.DST_COLOR,[uc]:n.DST_ALPHA,[dc]:n.ONE_MINUS_SRC_COLOR,[fc]:n.ONE_MINUS_SRC_ALPHA,[lc]:n.ONE_MINUS_DST_COLOR,[cc]:n.ONE_MINUS_DST_ALPHA,[ac]:n.CONSTANT_COLOR,[oc]:n.ONE_MINUS_CONSTANT_COLOR,[sc]:n.CONSTANT_ALPHA,[rc]:n.ONE_MINUS_CONSTANT_ALPHA};function P(L,_t,X,j,gt,mt,Ot,re,me,Zt){if(L===gn){S===!0&&(rt(n.BLEND),S=!1);return}if(S===!1&&(J(n.BLEND),S=!0),L!==Xc){if(L!==d||Zt!==b){if((c!==Zn||g!==Zn)&&(n.blendEquation(n.FUNC_ADD),c=Zn,g=Zn),Zt)switch(L){case Wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFunc(n.ONE,n.ONE);break;case Qs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case js:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qs:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case js:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,x=null,I=null,w=null,A.set(0,0,0),C=0,d=L,b=Zt}return}gt=gt||_t,mt=mt||X,Ot=Ot||j,(_t!==c||gt!==g)&&(n.blendEquationSeparate(Nt[_t],Nt[gt]),c=_t,g=gt),(X!==T||j!==x||mt!==I||Ot!==w)&&(n.blendFuncSeparate(Rt[X],Rt[j],Rt[mt],Rt[Ot]),T=X,x=j,I=mt,w=Ot),(re.equals(A)===!1||me!==C)&&(n.blendColor(re.r,re.g,re.b,me),A.copy(re),C=me),d=L,b=!1}function jt(L,_t){L.side===ke?rt(n.CULL_FACE):J(n.CULL_FACE);let X=L.side===we;_t&&(X=!X),It(X),L.blending===Wi&&L.transparent===!1?P(gn):P(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const j=L.stencilWrite;o.setTest(j),j&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),$t(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(n.SAMPLE_ALPHA_TO_COVERAGE):rt(n.SAMPLE_ALPHA_TO_COVERAGE)}function It(L){m!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),m=L)}function Ft(L){L!==kc?(J(n.CULL_FACE),L!==y&&(L===$s?n.cullFace(n.BACK):L===Wc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):rt(n.CULL_FACE),y=L}function Mt(L){L!==U&&(G&&n.lineWidth(L),U=L)}function $t(L,_t,X){L?(J(n.POLYGON_OFFSET_FILL),(D!==_t||B!==X)&&(n.polygonOffset(_t,X),D=_t,B=X)):rt(n.POLYGON_OFFSET_FILL)}function At(L){L?J(n.SCISSOR_TEST):rt(n.SCISSOR_TEST)}function R(L){L===void 0&&(L=n.TEXTURE0+q-1),lt!==L&&(n.activeTexture(L),lt=L)}function v(L,_t,X){X===void 0&&(lt===null?X=n.TEXTURE0+q-1:X=lt);let j=ht[X];j===void 0&&(j={type:void 0,texture:void 0},ht[X]=j),(j.type!==L||j.texture!==_t)&&(lt!==X&&(n.activeTexture(X),lt=X),n.bindTexture(L,_t||et[L]),j.type=L,j.texture=_t)}function V(){const L=ht[lt];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{n.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{n.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{n.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{n.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function it(){try{n.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(){try{n.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){dt.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),dt.copy(L))}function St(L){O.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),O.copy(L))}function Ht(L,_t){let X=f.get(_t);X===void 0&&(X=new WeakMap,f.set(_t,X));let j=X.get(L);j===void 0&&(j=n.getUniformBlockIndex(_t,L.name),X.set(L,j))}function Bt(L,_t){const j=f.get(_t).get(L);l.get(_t)!==j&&(n.uniformBlockBinding(_t,j,L.__bindingPointIndex),l.set(_t,j))}function Qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},lt=null,ht={},h={},u=new WeakMap,_=[],M=null,S=!1,d=null,c=null,T=null,x=null,g=null,I=null,w=null,A=new Gt(0,0,0),C=0,b=!1,m=null,y=null,U=null,D=null,B=null,dt.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:rt,bindFramebuffer:st,drawBuffers:ct,useProgram:Ct,setBlending:P,setMaterial:jt,setFlipSided:It,setCullFace:Ft,setLineWidth:Mt,setPolygonOffset:$t,setScissorTest:At,activeTexture:R,bindTexture:v,unbindTexture:V,compressedTexImage2D:$,compressedTexImage3D:Q,texImage2D:xt,texImage3D:Pt,updateUBOMapping:Ht,uniformBlockBinding:Bt,texStorage2D:zt,texStorage3D:it,texSubImage2D:K,texSubImage3D:Tt,compressedTexSubImage2D:pt,compressedTexSubImage3D:vt,scissor:Dt,viewport:St,reset:Qt}}function Qh(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new oe,p=new WeakMap;let h;const u=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,v){return _?new OffscreenCanvas(R,v):dl("canvas")}function S(R,v,V){let $=1;const Q=At(R);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const K=Math.floor($*Q.width),Tt=Math.floor($*Q.height);h===void 0&&(h=M(K,Tt));const pt=v?M(K,Tt):h;return pt.width=K,pt.height=Tt,pt.getContext("2d").drawImage(R,0,0,K,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Tt+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function d(R){return R.generateMipmaps}function c(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,v,V,$,Q=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let K=v;if(v===n.RED&&(V===n.FLOAT&&(K=n.R32F),V===n.HALF_FLOAT&&(K=n.R16F),V===n.UNSIGNED_BYTE&&(K=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.R8UI),V===n.UNSIGNED_SHORT&&(K=n.R16UI),V===n.UNSIGNED_INT&&(K=n.R32UI),V===n.BYTE&&(K=n.R8I),V===n.SHORT&&(K=n.R16I),V===n.INT&&(K=n.R32I)),v===n.RG&&(V===n.FLOAT&&(K=n.RG32F),V===n.HALF_FLOAT&&(K=n.RG16F),V===n.UNSIGNED_BYTE&&(K=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RG8UI),V===n.UNSIGNED_SHORT&&(K=n.RG16UI),V===n.UNSIGNED_INT&&(K=n.RG32UI),V===n.BYTE&&(K=n.RG8I),V===n.SHORT&&(K=n.RG16I),V===n.INT&&(K=n.RG32I)),v===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGB8UI),V===n.UNSIGNED_SHORT&&(K=n.RGB16UI),V===n.UNSIGNED_INT&&(K=n.RGB32UI),V===n.BYTE&&(K=n.RGB8I),V===n.SHORT&&(K=n.RGB16I),V===n.INT&&(K=n.RGB32I)),v===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(K=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(K=n.RGBA16UI),V===n.UNSIGNED_INT&&(K=n.RGBA32UI),V===n.BYTE&&(K=n.RGBA8I),V===n.SHORT&&(K=n.RGBA16I),V===n.INT&&(K=n.RGBA32I)),v===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(K=n.RGB9_E5),v===n.RGBA){const Tt=Q?_a:le.getTransfer($);V===n.FLOAT&&(K=n.RGBA32F),V===n.HALF_FLOAT&&(K=n.RGBA16F),V===n.UNSIGNED_BYTE&&(K=Tt===Jt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(K=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(K=n.RGB5_A1)}return(K===n.R16F||K===n.R32F||K===n.RG16F||K===n.RG32F||K===n.RGBA16F||K===n.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function g(R,v){let V;return R?v===null||v===ci||v===ai?V=n.DEPTH24_STENCIL8:v===mn?V=n.DEPTH32F_STENCIL8:v===Qi&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ci||v===ai?V=n.DEPTH_COMPONENT24:v===mn?V=n.DEPTH_COMPONENT32F:v===Qi&&(V=n.DEPTH_COMPONENT16),V}function I(R,v){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==si&&R.minFilter!==On?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function w(R){const v=R.target;v.removeEventListener("dispose",w),C(v),v.isVideoTexture&&p.delete(v)}function A(R){const v=R.target;v.removeEventListener("dispose",A),m(v)}function C(R){const v=i.get(R);if(v.__webglInit===void 0)return;const V=R.source,$=u.get(V);if($){const Q=$[v.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&b(R),Object.keys($).length===0&&u.delete(V)}i.remove(R)}function b(R){const v=i.get(R);n.deleteTexture(v.__webglTexture);const V=R.source,$=u.get(V);delete $[v.__cacheKey],a.memory.textures--}function m(R){const v=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let Q=0;Q<v.__webglFramebuffer[$].length;Q++)n.deleteFramebuffer(v.__webglFramebuffer[$][Q]);else n.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)n.deleteFramebuffer(v.__webglFramebuffer[$]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const V=R.textures;for(let $=0,Q=V.length;$<Q;$++){const K=i.get(V[$]);K.__webglTexture&&(n.deleteTexture(K.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(R)}let y=0;function U(){y=0}function D(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function B(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function q(R,v){const V=i.get(R);if(R.isVideoTexture&&Mt(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(V,R,v);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function G(R,v){const V=i.get(R);if(R.version>0&&V.__version!==R.version){O(V,R,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function Y(R,v){const V=i.get(R);if(R.version>0&&V.__version!==R.version){O(V,R,v);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function k(R,v){const V=i.get(R);if(R.version>0&&V.__version!==R.version){Z(V,R,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}const lt={[Sc]:n.REPEAT,[xc]:n.CLAMP_TO_EDGE,[vc]:n.MIRRORED_REPEAT},ht={[si]:n.NEAREST,[Ec]:n.NEAREST_MIPMAP_NEAREST,[gi]:n.NEAREST_MIPMAP_LINEAR,[On]:n.LINEAR,[dr]:n.LINEAR_MIPMAP_NEAREST,[ni]:n.LINEAR_MIPMAP_LINEAR},ft={[Cc]:n.NEVER,[Rc]:n.ALWAYS,[wc]:n.LESS,[ea]:n.LEQUAL,[yc]:n.EQUAL,[Ac]:n.GEQUAL,[Tc]:n.GREATER,[Mc]:n.NOTEQUAL};function at(R,v){if(v.type===mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===On||v.magFilter===dr||v.magFilter===gi||v.magFilter===ni||v.minFilter===On||v.minFilter===dr||v.minFilter===gi||v.minFilter===ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,lt[v.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,lt[v.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,lt[v.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ht[v.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ht[v.minFilter]),v.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ft[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===si||v.minFilter!==gi&&v.minFilter!==ni||v.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function dt(R,v){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",w));const $=v.source;let Q=u.get($);Q===void 0&&(Q={},u.set($,Q));const K=B(v);if(K!==R.__cacheKey){Q[K]===void 0&&(Q[K]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[K].usedTimes++;const Tt=Q[R.__cacheKey];Tt!==void 0&&(Q[R.__cacheKey].usedTimes--,Tt.usedTimes===0&&b(v)),R.__cacheKey=K,R.__webglTexture=Q[K].texture}return V}function O(R,v,V){let $=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=n.TEXTURE_3D);const Q=dt(R,v),K=v.source;e.bindTexture($,R.__webglTexture,n.TEXTURE0+V);const Tt=i.get(K);if(K.version!==Tt.__version||Q===!0){e.activeTexture(n.TEXTURE0+V);const pt=le.getPrimaries(le.workingColorSpace),vt=v.colorSpace===Fn?null:le.getPrimaries(v.colorSpace),zt=v.colorSpace===Fn||pt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=S(v.image,!1,r.maxTextureSize);it=$t(v,it);const xt=s.convert(v.format,v.colorSpace),Pt=s.convert(v.type);let Dt=x(v.internalFormat,xt,Pt,v.colorSpace,v.isVideoTexture);at($,v);let St;const Ht=v.mipmaps,Bt=v.isVideoTexture!==!0,Qt=Tt.__version===void 0||Q===!0,L=K.dataReady,_t=I(v,it);if(v.isDepthTexture)Dt=g(v.format===$i,v.type),Qt&&(Bt?e.texStorage2D(n.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(n.TEXTURE_2D,0,Dt,it.width,it.height,0,xt,Pt,null));else if(v.isDataTexture)if(Ht.length>0){Bt&&Qt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let X=0,j=Ht.length;X<j;X++)St=Ht[X],Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,xt,Pt,St.data):e.texImage2D(n.TEXTURE_2D,X,Dt,St.width,St.height,0,xt,Pt,St.data);v.generateMipmaps=!1}else Bt?(Qt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,it.width,it.height),L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,it.width,it.height,xt,Pt,it.data)):e.texImage2D(n.TEXTURE_2D,0,Dt,it.width,it.height,0,xt,Pt,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Bt&&Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,Ht[0].width,Ht[0].height,it.depth);for(let X=0,j=Ht.length;X<j;X++)if(St=Ht[X],v.format!==Ze)if(xt!==null)if(Bt){if(L)if(v.layerUpdates.size>0){const gt=eo(St.width,St.height,v.format,v.type);for(const mt of v.layerUpdates){const Ot=St.data.subarray(mt*gt/St.data.BYTES_PER_ELEMENT,(mt+1)*gt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,mt,St.width,St.height,1,xt,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,xt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,Dt,St.width,St.height,it.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?L&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,St.width,St.height,it.depth,xt,Pt,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,Dt,St.width,St.height,it.depth,0,xt,Pt,St.data)}else{Bt&&Qt&&e.texStorage2D(n.TEXTURE_2D,_t,Dt,Ht[0].width,Ht[0].height);for(let X=0,j=Ht.length;X<j;X++)St=Ht[X],v.format!==Ze?xt!==null?Bt?L&&e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,xt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,X,Dt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,St.width,St.height,xt,Pt,St.data):e.texImage2D(n.TEXTURE_2D,X,Dt,St.width,St.height,0,xt,Pt,St.data)}else if(v.isDataArrayTexture)if(Bt){if(Qt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,_t,Dt,it.width,it.height,it.depth),L)if(v.layerUpdates.size>0){const X=eo(it.width,it.height,v.format,v.type);for(const j of v.layerUpdates){const gt=it.data.subarray(j*X/it.data.BYTES_PER_ELEMENT,(j+1)*X/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,xt,Pt,gt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,xt,Pt,it.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,xt,Pt,it.data);else if(v.isData3DTexture)Bt?(Qt&&e.texStorage3D(n.TEXTURE_3D,_t,Dt,it.width,it.height,it.depth),L&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,xt,Pt,it.data)):e.texImage3D(n.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,xt,Pt,it.data);else if(v.isFramebufferTexture){if(Qt)if(Bt)e.texStorage2D(n.TEXTURE_2D,_t,Dt,it.width,it.height);else{let X=it.width,j=it.height;for(let gt=0;gt<_t;gt++)e.texImage2D(n.TEXTURE_2D,gt,Dt,X,j,0,xt,Pt,null),X>>=1,j>>=1}}else if(Ht.length>0){if(Bt&&Qt){const X=At(Ht[0]);e.texStorage2D(n.TEXTURE_2D,_t,Dt,X.width,X.height)}for(let X=0,j=Ht.length;X<j;X++)St=Ht[X],Bt?L&&e.texSubImage2D(n.TEXTURE_2D,X,0,0,xt,Pt,St):e.texImage2D(n.TEXTURE_2D,X,Dt,xt,Pt,St);v.generateMipmaps=!1}else if(Bt){if(Qt){const X=At(it);e.texStorage2D(n.TEXTURE_2D,_t,Dt,X.width,X.height)}L&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Pt,it)}else e.texImage2D(n.TEXTURE_2D,0,Dt,xt,Pt,it);d(v)&&c($),Tt.__version=K.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Z(R,v,V){if(v.image.length!==6)return;const $=dt(R,v),Q=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const K=i.get(Q);if(Q.version!==K.__version||$===!0){e.activeTexture(n.TEXTURE0+V);const Tt=le.getPrimaries(le.workingColorSpace),pt=v.colorSpace===Fn?null:le.getPrimaries(v.colorSpace),vt=v.colorSpace===Fn||Tt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const zt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let j=0;j<6;j++)!zt&&!it?xt[j]=S(v.image[j],!0,r.maxCubemapSize):xt[j]=it?v.image[j].image:v.image[j],xt[j]=$t(v,xt[j]);const Pt=xt[0],Dt=s.convert(v.format,v.colorSpace),St=s.convert(v.type),Ht=x(v.internalFormat,Dt,St,v.colorSpace),Bt=v.isVideoTexture!==!0,Qt=K.__version===void 0||$===!0,L=Q.dataReady;let _t=I(v,Pt);at(n.TEXTURE_CUBE_MAP,v);let X;if(zt){Bt&&Qt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,Pt.width,Pt.height);for(let j=0;j<6;j++){X=xt[j].mipmaps;for(let gt=0;gt<X.length;gt++){const mt=X[gt];v.format!==Ze?Dt!==null?Bt?L&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,mt.width,mt.height,Dt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ht,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,0,0,mt.width,mt.height,Dt,St,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt,Ht,mt.width,mt.height,0,Dt,St,mt.data)}}}else{if(X=v.mipmaps,Bt&&Qt){X.length>0&&_t++;const j=At(xt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Ht,j.width,j.height)}for(let j=0;j<6;j++)if(it){Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,xt[j].width,xt[j].height,Dt,St,xt[j].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,xt[j].width,xt[j].height,0,Dt,St,xt[j].data);for(let gt=0;gt<X.length;gt++){const Ot=X[gt].image[j].image;Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Ot.width,Ot.height,Dt,St,Ot.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ht,Ot.width,Ot.height,0,Dt,St,Ot.data)}}else{Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Dt,St,xt[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ht,Dt,St,xt[j]);for(let gt=0;gt<X.length;gt++){const mt=X[gt];Bt?L&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,0,0,Dt,St,mt.image[j]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,gt+1,Ht,Dt,St,mt.image[j])}}}d(v)&&c(n.TEXTURE_CUBE_MAP),K.__version=Q.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function et(R,v,V,$,Q,K){const Tt=s.convert(V.format,V.colorSpace),pt=s.convert(V.type),vt=x(V.internalFormat,Tt,pt,V.colorSpace),zt=i.get(v),it=i.get(V);if(it.__renderTarget=v,!zt.__hasExternalTextures){const xt=Math.max(1,v.width>>K),Pt=Math.max(1,v.height>>K);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,vt,xt,Pt,v.depth,0,Tt,pt,null):e.texImage2D(Q,K,vt,xt,Pt,0,Tt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,Q,it.__webglTexture,0,It(v)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,Q,it.__webglTexture,K),e.bindFramebuffer(n.FRAMEBUFFER,null)}function J(R,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),v.depthBuffer){const $=v.depthTexture,Q=$&&$.isDepthTexture?$.type:null,K=g(v.stencilBuffer,Q),Tt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=It(v);Ft(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,K,v.width,v.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,K,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,K,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Tt,n.RENDERBUFFER,R)}else{const $=v.textures;for(let Q=0;Q<$.length;Q++){const K=$[Q],Tt=s.convert(K.format,K.colorSpace),pt=s.convert(K.type),vt=x(K.internalFormat,Tt,pt,K.colorSpace),zt=It(v);V&&Ft(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,vt,v.width,v.height):Ft(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,zt,vt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,vt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(R,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const Q=$.__webglTexture,K=It(v);if(v.depthTexture.format===ds)Ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Q,0);else if(v.depthTexture.format===$i)Ft(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0,K):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function st(R){const v=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const Q=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),v.__depthDisposeCallback=Q}v.__boundDepthTexture=$}if(R.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");rt(v.__webglFramebuffer,R)}else if(V){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=n.createRenderbuffer(),J(v.__webglDepthbuffer[$],R,!1);else{const Q=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,K),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,K)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),J(v.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,$,n.RENDERBUFFER,Q)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ct(R,v,V){const $=i.get(R);v!==void 0&&et($.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&st(R)}function Ct(R){const v=R.texture,V=i.get(R),$=i.get(v);R.addEventListener("dispose",A);const Q=R.textures,K=R.isWebGLCubeRenderTarget===!0,Tt=Q.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=v.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let vt=0;vt<v.mipmaps.length;vt++)V.__webglFramebuffer[pt][vt]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<v.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Tt)for(let pt=0,vt=Q.length;pt<vt;pt++){const zt=i.get(Q[pt]);zt.__webglTexture===void 0&&(zt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Ft(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<Q.length;pt++){const vt=Q[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const zt=s.convert(vt.format,vt.colorSpace),it=s.convert(vt.type),xt=x(vt.internalFormat,zt,it,vt.colorSpace,R.isXRRenderTarget===!0),Pt=It(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),J(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(K){e.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),at(n.TEXTURE_CUBE_MAP,v);for(let pt=0;pt<6;pt++)if(v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)et(V.__webglFramebuffer[pt][vt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,vt);else et(V.__webglFramebuffer[pt],R,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);d(v)&&c(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let pt=0,vt=Q.length;pt<vt;pt++){const zt=Q[pt],it=i.get(zt);e.bindTexture(n.TEXTURE_2D,it.__webglTexture),at(n.TEXTURE_2D,zt),et(V.__webglFramebuffer,R,zt,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),d(zt)&&c(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,$.__webglTexture),at(pt,v),v.mipmaps&&v.mipmaps.length>0)for(let vt=0;vt<v.mipmaps.length;vt++)et(V.__webglFramebuffer[vt],R,v,n.COLOR_ATTACHMENT0,pt,vt);else et(V.__webglFramebuffer,R,v,n.COLOR_ATTACHMENT0,pt,0);d(v)&&c(pt),e.unbindTexture()}R.depthBuffer&&st(R)}function Nt(R){const v=R.textures;for(let V=0,$=v.length;V<$;V++){const Q=v[V];if(d(Q)){const K=T(R),Tt=i.get(Q).__webglTexture;e.bindTexture(K,Tt),c(K),e.unbindTexture()}}}const Rt=[],P=[];function jt(R){if(R.samples>0){if(Ft(R)===!1){const v=R.textures,V=R.width,$=R.height;let Q=n.COLOR_BUFFER_BIT;const K=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Tt=i.get(R),pt=v.length>1;if(pt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=i.get(v[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,zt,0)}n.blitFramebuffer(0,0,V,$,0,0,V,$,Q,n.NEAREST),l===!0&&(Rt.length=0,P.length=0,Rt.push(n.COLOR_ATTACHMENT0+vt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Rt.push(K),P.push(K),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Tt.__webglColorRenderbuffer[vt]);const zt=i.get(v[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Tt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,zt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const v=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function It(R){return Math.min(r.maxSamples,R.samples)}function Ft(R){const v=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Mt(R){const v=a.render.frame;p.get(R)!==v&&(p.set(R,v),R.update())}function $t(R,v){const V=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==nr&&V!==Fn&&(le.getTransfer(V)===Jt?($!==Ze||Q!==bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function At(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(f.width=R.naturalWidth||R.width,f.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(f.width=R.displayWidth,f.height=R.displayHeight):(f.width=R.width,f.height=R.height),f}this.allocateTextureUnit=D,this.resetTextureUnits=U,this.setTexture2D=q,this.setTexture2DArray=G,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=ct,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ft}function Jh(n,t){function e(i,r=Fn){let s;const a=le.getTransfer(r);if(i===bn)return n.UNSIGNED_BYTE;if(i===ia)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ra)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Dc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lc)return n.BYTE;if(i===Nc)return n.SHORT;if(i===Qi)return n.UNSIGNED_SHORT;if(i===aa)return n.INT;if(i===ci)return n.UNSIGNED_INT;if(i===mn)return n.FLOAT;if(i===er)return n.HALF_FLOAT;if(i===Fc)return n.ALPHA;if(i===Oc)return n.RGB;if(i===Ze)return n.RGBA;if(i===Bc)return n.LUMINANCE;if(i===Vc)return n.LUMINANCE_ALPHA;if(i===ds)return n.DEPTH_COMPONENT;if(i===$i)return n.DEPTH_STENCIL;if(i===Gc)return n.RED;if(i===ca)return n.RED_INTEGER;if(i===Hc)return n.RG;if(i===la)return n.RG_INTEGER;if(i===fa)return n.RGBA_INTEGER;if(i===ur||i===hr||i===pr||i===_r)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ur)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ur)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===hr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===pr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_r)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ts||i===As||i===ys||i===ws)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ts)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===As)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ys)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ws)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rs||i===Cs||i===Is)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rs||i===Cs)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Is)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ps||i===Us||i===Ds||i===Ls||i===Ns||i===Fs||i===Os||i===Bs||i===Vs||i===Gs||i===Hs||i===zs||i===ks||i===Ws)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ps)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Us)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ds)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ls)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ns)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Fs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Os)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===zs)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ks)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ws)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mr||i===Xs||i===qs)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===mr)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zc||i===Ks||i===Ys||i===Zs)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===mr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ks)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ys)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zs)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ai?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const tp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ep=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class np{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const r=new sa,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new xn({vertexShader:tp,fragmentShader:ep,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new We(new oa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ip extends Ja{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,f=null,p=null,h=null,u=null,_=null,M=null;const S=new np,d=e.getContextAttributes();let c=null,T=null;const x=[],g=[],I=new oe;let w=null;const A=new ki;A.viewport=new de;const C=new ki;C.viewport=new de;const b=[A,C],m=new tc;let y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let Z=x[O];return Z===void 0&&(Z=new fr,x[O]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(O){let Z=x[O];return Z===void 0&&(Z=new fr,x[O]=Z),Z.getGripSpace()},this.getHand=function(O){let Z=x[O];return Z===void 0&&(Z=new fr,x[O]=Z),Z.getHandSpace()};function D(O){const Z=g.indexOf(O.inputSource);if(Z===-1)return;const et=x[Z];et!==void 0&&(et.update(O.inputSource,O.frame,f||a),et.dispatchEvent({type:O.type,data:O.inputSource}))}function B(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",q);for(let O=0;O<x.length;O++){const Z=g[O];Z!==null&&(g[O]=null,x[O].disconnect(Z))}y=null,U=null,S.reset(),t.setRenderTarget(c),_=null,u=null,h=null,r=null,T=null,dt.stop(),i.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(O){f=O},this.getBaseLayer=function(){return u!==null?u:_},this.getBinding=function(){return h},this.getFrame=function(){return M},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(c=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",B),r.addEventListener("inputsourceschange",q),d.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let et=null,J=null,rt=null;d.depth&&(rt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=d.stencil?$i:ds,J=d.stencil?ai:ci);const st={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};h=new XRWebGLBinding(r,e),u=h.createProjectionLayer(st),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new zn(u.textureWidth,u.textureHeight,{format:Ze,type:bn,depthTexture:new ta(u.textureWidth,u.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const et={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,et),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),T=new zn(_.framebufferWidth,_.framebufferHeight,{format:Ze,type:bn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),f=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(O){for(let Z=0;Z<O.removed.length;Z++){const et=O.removed[Z],J=g.indexOf(et);J>=0&&(g[J]=null,x[J].disconnect(et))}for(let Z=0;Z<O.added.length;Z++){const et=O.added[Z];let J=g.indexOf(et);if(J===-1){for(let st=0;st<x.length;st++)if(st>=g.length){g.push(et),J=st;break}else if(g[st]===null){g[st]=et,J=st;break}if(J===-1)break}const rt=x[J];rt&&rt.connect(et)}}const G=new tt,Y=new tt;function k(O,Z,et){G.setFromMatrixPosition(Z.matrixWorld),Y.setFromMatrixPosition(et.matrixWorld);const J=G.distanceTo(Y),rt=Z.projectionMatrix.elements,st=et.projectionMatrix.elements,ct=rt[14]/(rt[10]-1),Ct=rt[14]/(rt[10]+1),Nt=(rt[9]+1)/rt[5],Rt=(rt[9]-1)/rt[5],P=(rt[8]-1)/rt[0],jt=(st[8]+1)/st[0],It=ct*P,Ft=ct*jt,Mt=J/(-P+jt),$t=Mt*-P;if(Z.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX($t),O.translateZ(Mt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),rt[10]===-1)O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const At=ct+Mt,R=Ct+Mt,v=It-$t,V=Ft+(J-$t),$=Nt*Ct/R*At,Q=Rt*Ct/R*At;O.projectionMatrix.makePerspective(v,V,$,Q,At,R),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function lt(O,Z){Z===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(Z.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let Z=O.near,et=O.far;S.texture!==null&&(S.depthNear>0&&(Z=S.depthNear),S.depthFar>0&&(et=S.depthFar)),m.near=C.near=A.near=Z,m.far=C.far=A.far=et,(y!==m.near||U!==m.far)&&(r.updateRenderState({depthNear:m.near,depthFar:m.far}),y=m.near,U=m.far),A.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,m.layers.mask=A.layers.mask|C.layers.mask;const J=O.parent,rt=m.cameras;lt(m,J);for(let st=0;st<rt.length;st++)lt(rt[st],J);rt.length===2?k(m,A,C):m.projectionMatrix.copy(A.projectionMatrix),ht(O,m,J)};function ht(O,Z,et){et===null?O.matrix.copy(Z.matrixWorld):(O.matrix.copy(et.matrixWorld),O.matrix.invert(),O.matrix.multiply(Z.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(Z.projectionMatrix),O.projectionMatrixInverse.copy(Z.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ec*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return m},this.getFoveation=function(){if(!(u===null&&_===null))return l},this.setFoveation=function(O){l=O,u!==null&&(u.fixedFoveation=O),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=O)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(m)};let ft=null;function at(O,Z){if(p=Z.getViewerPose(f||a),M=Z,p!==null){const et=p.views;_!==null&&(t.setRenderTargetFramebuffer(T,_.framebuffer),t.setRenderTarget(T));let J=!1;et.length!==m.cameras.length&&(m.cameras.length=0,J=!0);for(let ct=0;ct<et.length;ct++){const Ct=et[ct];let Nt=null;if(_!==null)Nt=_.getViewport(Ct);else{const P=h.getViewSubImage(u,Ct);Nt=P.viewport,ct===0&&(t.setRenderTargetTextures(T,P.colorTexture,P.depthStencilTexture),t.setRenderTarget(T))}let Rt=b[ct];Rt===void 0&&(Rt=new ki,Rt.layers.enable(ct),Rt.viewport=new de,b[ct]=Rt),Rt.matrix.fromArray(Ct.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(Ct.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),ct===0&&(m.matrix.copy(Rt.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale)),J===!0&&m.cameras.push(Rt)}const rt=r.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&h){const ct=h.getDepthInformation(et[0]);ct&&ct.isValid&&ct.texture&&S.init(t,ct,r.renderState)}}for(let et=0;et<x.length;et++){const J=g[et],rt=x[et];J!==null&&rt!==void 0&&rt.update(J,Z,f||a)}ft&&ft(O,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),M=null}const dt=new xa;dt.setAnimationLoop(at),this.setAnimationLoop=function(O){ft=O},this.dispose=function(){}}}const ln=new pa,rp=new qt;function sp(n,t){function e(d,c){d.matrixAutoUpdate===!0&&d.updateMatrix(),c.value.copy(d.matrix)}function i(d,c){c.color.getRGB(d.fogColor.value,ua(n)),c.isFog?(d.fogNear.value=c.near,d.fogFar.value=c.far):c.isFogExp2&&(d.fogDensity.value=c.density)}function r(d,c,T,x,g){c.isMeshBasicMaterial||c.isMeshLambertMaterial?s(d,c):c.isMeshToonMaterial?(s(d,c),h(d,c)):c.isMeshPhongMaterial?(s(d,c),p(d,c)):c.isMeshStandardMaterial?(s(d,c),u(d,c),c.isMeshPhysicalMaterial&&_(d,c,g)):c.isMeshMatcapMaterial?(s(d,c),M(d,c)):c.isMeshDepthMaterial?s(d,c):c.isMeshDistanceMaterial?(s(d,c),S(d,c)):c.isMeshNormalMaterial?s(d,c):c.isLineBasicMaterial?(a(d,c),c.isLineDashedMaterial&&o(d,c)):c.isPointsMaterial?l(d,c,T,x):c.isSpriteMaterial?f(d,c):c.isShadowMaterial?(d.color.value.copy(c.color),d.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(d,c){d.opacity.value=c.opacity,c.color&&d.diffuse.value.copy(c.color),c.emissive&&d.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(d.map.value=c.map,e(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,e(c.alphaMap,d.alphaMapTransform)),c.bumpMap&&(d.bumpMap.value=c.bumpMap,e(c.bumpMap,d.bumpMapTransform),d.bumpScale.value=c.bumpScale,c.side===we&&(d.bumpScale.value*=-1)),c.normalMap&&(d.normalMap.value=c.normalMap,e(c.normalMap,d.normalMapTransform),d.normalScale.value.copy(c.normalScale),c.side===we&&d.normalScale.value.negate()),c.displacementMap&&(d.displacementMap.value=c.displacementMap,e(c.displacementMap,d.displacementMapTransform),d.displacementScale.value=c.displacementScale,d.displacementBias.value=c.displacementBias),c.emissiveMap&&(d.emissiveMap.value=c.emissiveMap,e(c.emissiveMap,d.emissiveMapTransform)),c.specularMap&&(d.specularMap.value=c.specularMap,e(c.specularMap,d.specularMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest);const T=t.get(c),x=T.envMap,g=T.envMapRotation;x&&(d.envMap.value=x,ln.copy(g),ln.x*=-1,ln.y*=-1,ln.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ln.y*=-1,ln.z*=-1),d.envMapRotation.value.setFromMatrix4(rp.makeRotationFromEuler(ln)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=c.reflectivity,d.ior.value=c.ior,d.refractionRatio.value=c.refractionRatio),c.lightMap&&(d.lightMap.value=c.lightMap,d.lightMapIntensity.value=c.lightMapIntensity,e(c.lightMap,d.lightMapTransform)),c.aoMap&&(d.aoMap.value=c.aoMap,d.aoMapIntensity.value=c.aoMapIntensity,e(c.aoMap,d.aoMapTransform))}function a(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,c.map&&(d.map.value=c.map,e(c.map,d.mapTransform))}function o(d,c){d.dashSize.value=c.dashSize,d.totalSize.value=c.dashSize+c.gapSize,d.scale.value=c.scale}function l(d,c,T,x){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.size.value=c.size*T,d.scale.value=x*.5,c.map&&(d.map.value=c.map,e(c.map,d.uvTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,e(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function f(d,c){d.diffuse.value.copy(c.color),d.opacity.value=c.opacity,d.rotation.value=c.rotation,c.map&&(d.map.value=c.map,e(c.map,d.mapTransform)),c.alphaMap&&(d.alphaMap.value=c.alphaMap,e(c.alphaMap,d.alphaMapTransform)),c.alphaTest>0&&(d.alphaTest.value=c.alphaTest)}function p(d,c){d.specular.value.copy(c.specular),d.shininess.value=Math.max(c.shininess,1e-4)}function h(d,c){c.gradientMap&&(d.gradientMap.value=c.gradientMap)}function u(d,c){d.metalness.value=c.metalness,c.metalnessMap&&(d.metalnessMap.value=c.metalnessMap,e(c.metalnessMap,d.metalnessMapTransform)),d.roughness.value=c.roughness,c.roughnessMap&&(d.roughnessMap.value=c.roughnessMap,e(c.roughnessMap,d.roughnessMapTransform)),c.envMap&&(d.envMapIntensity.value=c.envMapIntensity)}function _(d,c,T){d.ior.value=c.ior,c.sheen>0&&(d.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),d.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(d.sheenColorMap.value=c.sheenColorMap,e(c.sheenColorMap,d.sheenColorMapTransform)),c.sheenRoughnessMap&&(d.sheenRoughnessMap.value=c.sheenRoughnessMap,e(c.sheenRoughnessMap,d.sheenRoughnessMapTransform))),c.clearcoat>0&&(d.clearcoat.value=c.clearcoat,d.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(d.clearcoatMap.value=c.clearcoatMap,e(c.clearcoatMap,d.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,e(c.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(d.clearcoatNormalMap.value=c.clearcoatNormalMap,e(c.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===we&&d.clearcoatNormalScale.value.negate())),c.dispersion>0&&(d.dispersion.value=c.dispersion),c.iridescence>0&&(d.iridescence.value=c.iridescence,d.iridescenceIOR.value=c.iridescenceIOR,d.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(d.iridescenceMap.value=c.iridescenceMap,e(c.iridescenceMap,d.iridescenceMapTransform)),c.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=c.iridescenceThicknessMap,e(c.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),c.transmission>0&&(d.transmission.value=c.transmission,d.transmissionSamplerMap.value=T.texture,d.transmissionSamplerSize.value.set(T.width,T.height),c.transmissionMap&&(d.transmissionMap.value=c.transmissionMap,e(c.transmissionMap,d.transmissionMapTransform)),d.thickness.value=c.thickness,c.thicknessMap&&(d.thicknessMap.value=c.thicknessMap,e(c.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=c.attenuationDistance,d.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(d.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(d.anisotropyMap.value=c.anisotropyMap,e(c.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=c.specularIntensity,d.specularColor.value.copy(c.specularColor),c.specularColorMap&&(d.specularColorMap.value=c.specularColorMap,e(c.specularColorMap,d.specularColorMapTransform)),c.specularIntensityMap&&(d.specularIntensityMap.value=c.specularIntensityMap,e(c.specularIntensityMap,d.specularIntensityMapTransform))}function M(d,c){c.matcap&&(d.matcap.value=c.matcap)}function S(d,c){const T=t.get(c).light;d.referencePosition.value.setFromMatrixPosition(T.matrixWorld),d.nearDistance.value=T.shadow.camera.near,d.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function op(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const g=x.program;i.uniformBlockBinding(T,g)}function f(T,x){let g=r[T.id];g===void 0&&(M(T),g=p(T),r[T.id]=g,T.addEventListener("dispose",d));const I=x.program;i.updateUBOMapping(T,I);const w=t.render.frame;s[T.id]!==w&&(u(T),s[T.id]=w)}function p(T){const x=h();T.__bindingPointIndex=x;const g=n.createBuffer(),I=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,g),n.bufferData(n.UNIFORM_BUFFER,I,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,g),g}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(T){const x=r[T.id],g=T.uniforms,I=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,A=g.length;w<A;w++){const C=Array.isArray(g[w])?g[w]:[g[w]];for(let b=0,m=C.length;b<m;b++){const y=C[b];if(_(y,w,b,I)===!0){const U=y.__offset,D=Array.isArray(y.value)?y.value:[y.value];let B=0;for(let q=0;q<D.length;q++){const G=D[q],Y=S(G);typeof G=="number"||typeof G=="boolean"?(y.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+B,y.__data)):G.isMatrix3?(y.__data[0]=G.elements[0],y.__data[1]=G.elements[1],y.__data[2]=G.elements[2],y.__data[3]=0,y.__data[4]=G.elements[3],y.__data[5]=G.elements[4],y.__data[6]=G.elements[5],y.__data[7]=0,y.__data[8]=G.elements[6],y.__data[9]=G.elements[7],y.__data[10]=G.elements[8],y.__data[11]=0):(G.toArray(y.__data,B),B+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,y.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(T,x,g,I){const w=T.value,A=x+"_"+g;if(I[A]===void 0)return typeof w=="number"||typeof w=="boolean"?I[A]=w:I[A]=w.clone(),!0;{const C=I[A];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return I[A]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function M(T){const x=T.uniforms;let g=0;const I=16;for(let A=0,C=x.length;A<C;A++){const b=Array.isArray(x[A])?x[A]:[x[A]];for(let m=0,y=b.length;m<y;m++){const U=b[m],D=Array.isArray(U.value)?U.value:[U.value];for(let B=0,q=D.length;B<q;B++){const G=D[B],Y=S(G),k=g%I,lt=k%Y.boundary,ht=k+lt;g+=lt,ht!==0&&I-ht<Y.storage&&(g+=I-ht),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=g,g+=Y.storage}}}const w=g%I;return w>0&&(g+=I-w),T.__size=g,T.__cache={},this}function S(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function d(T){const x=T.target;x.removeEventListener("dispose",d);const g=a.indexOf(x.__bindingPointIndex);a.splice(g,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function c(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:f,dispose:c}}class I_{constructor(t={}){const{canvas:e=qa(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=new Uint32Array(4),S=new Int32Array(4);let d=null,c=null;const T=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const g=this;let I=!1;this._outputColorSpace=Ka;let w=0,A=0,C=null,b=-1,m=null;const y=new de,U=new de;let D=null;const B=new Gt(0);let q=0,G=e.width,Y=e.height,k=1,lt=null,ht=null;const ft=new de(0,0,G,Y),at=new de(0,0,G,Y);let dt=!1;const O=new Jo;let Z=!1,et=!1;const J=new qt,rt=new qt,st=new tt,ct=new de,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Rt(){return C===null?k:1}let P=i;function jt(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",j,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),P===null){const N="webgl2";if(P=jt(N,E),P===null)throw jt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let It,Ft,Mt,$t,At,R,v,V,$,Q,K,Tt,pt,vt,zt,it,xt,Pt,Dt,St,Ht,Bt,Qt,L;function _t(){It=new gu(P),It.init(),Bt=new Jh(P,It),Ft=new fu(P,It,t,Bt),Mt=new jh(P,It),Ft.reverseDepthBuffer&&u&&Mt.buffers.depth.setReversed(!0),$t=new xu(P),At=new Bh,R=new Qh(P,It,Mt,At,Ft,Bt,$t),v=new uu(g),V=new mu(g),$=new Al(P),Qt=new cu(P,$),Q=new bu(P,$,$t,Qt),K=new Eu(P,Q,$,$t),Dt=new Su(P,Ft,R),it=new du(At),Tt=new Oh(g,v,V,It,Ft,Qt,it),pt=new sp(g,At),vt=new Gh,zt=new qh(It),Pt=new au(g,v,V,Mt,K,_,l),xt=new Zh(g,K,Ft),L=new op(P,$t,Ft,Mt),St=new lu(P,It,$t),Ht=new vu(P,It,$t),$t.programs=Tt.programs,g.capabilities=Ft,g.extensions=It,g.properties=At,g.renderLists=vt,g.shadowMap=xt,g.state=Mt,g.info=$t}_t();const X=new ip(g,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=It.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=It.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(G,Y,!1))},this.getSize=function(E){return E.set(G,Y)},this.setSize=function(E,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Y=N,e.width=Math.floor(E*k),e.height=Math.floor(N*k),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(G*k,Y*k).floor()},this.setDrawingBufferSize=function(E,N,H){G=E,Y=N,k=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(ft)},this.setViewport=function(E,N,H,z){E.isVector4?ft.set(E.x,E.y,E.z,E.w):ft.set(E,N,H,z),Mt.viewport(y.copy(ft).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,N,H,z){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,N,H,z),Mt.scissor(U.copy(at).multiplyScalar(k).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Mt.setScissorTest(dt=E)},this.setOpaqueSort=function(E){lt=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(E=!0,N=!0,H=!0){let z=0;if(E){let F=!1;if(C!==null){const nt=C.texture.format;F=nt===fa||nt===la||nt===ca}if(F){const nt=C.texture.type,ut=nt===bn||nt===ci||nt===Qi||nt===ai||nt===ia||nt===ra,bt=Pt.getClearColor(),Et=Pt.getClearAlpha(),Lt=bt.r,Ut=bt.g,yt=bt.b;ut?(M[0]=Lt,M[1]=Ut,M[2]=yt,M[3]=Et,P.clearBufferuiv(P.COLOR,0,M)):(S[0]=Lt,S[1]=Ut,S[2]=yt,S[3]=Et,P.clearBufferiv(P.COLOR,0,S))}else z|=P.COLOR_BUFFER_BIT}N&&(z|=P.DEPTH_BUFFER_BIT),H&&(z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",j,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Pt.dispose(),vt.dispose(),zt.dispose(),At.dispose(),v.dispose(),V.dispose(),K.dispose(),Qt.dispose(),L.dispose(),Tt.dispose(),X.dispose(),X.removeEventListener("sessionstart",gs),X.removeEventListener("sessionend",bs),on.stop()};function j(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const E=$t.autoReset,N=xt.enabled,H=xt.autoUpdate,z=xt.needsUpdate,F=xt.type;_t(),$t.autoReset=E,xt.enabled=N,xt.autoUpdate=H,xt.needsUpdate=z,xt.type=F}function mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ot(E){const N=E.target;N.removeEventListener("dispose",Ot),re(N)}function re(E){me(E),At.remove(E)}function me(E){const N=At.get(E).programs;N!==void 0&&(N.forEach(function(H){Tt.releaseProgram(H)}),E.isShaderMaterial&&Tt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,z,F,nt){N===null&&(N=Ct);const ut=F.isMesh&&F.matrixWorld.determinant()<0,bt=Ga(E,N,H,z,F);Mt.setMaterial(z,ut);let Et=H.index,Lt=1;if(z.wireframe===!0){if(Et=Q.getWireframeAttribute(H),Et===void 0)return;Lt=2}const Ut=H.drawRange,yt=H.attributes.position;let kt=Ut.start*Lt,Kt=(Ut.start+Ut.count)*Lt;nt!==null&&(kt=Math.max(kt,nt.start*Lt),Kt=Math.min(Kt,(nt.start+nt.count)*Lt)),Et!==null?(kt=Math.max(kt,0),Kt=Math.min(Kt,Et.count)):yt!=null&&(kt=Math.max(kt,0),Kt=Math.min(Kt,yt.count));const ae=Kt-kt;if(ae<0||ae===1/0)return;Qt.setup(F,z,bt,H,Et);let se,Wt=St;if(Et!==null&&(se=$.get(Et),Wt=Ht,Wt.setIndex(se)),F.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*Rt()),Wt.setMode(P.LINES)):Wt.setMode(P.TRIANGLES);else if(F.isLine){let wt=z.linewidth;wt===void 0&&(wt=1),Mt.setLineWidth(wt*Rt()),F.isLineSegments?Wt.setMode(P.LINES):F.isLineLoop?Wt.setMode(P.LINE_LOOP):Wt.setMode(P.LINE_STRIP)}else F.isPoints?Wt.setMode(P.POINTS):F.isSprite&&Wt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)zi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))Wt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,pe=F._multiDrawCounts,Yt=F._multiDrawCount,Fe=Et?$.get(Et).bytesPerElement:1,Mn=At.get(z).currentProgram.getUniforms();for(let Me=0;Me<Yt;Me++)Mn.setValue(P,"_gl_DrawID",Me),Wt.render(wt[Me]/Fe,pe[Me])}else if(F.isInstancedMesh)Wt.renderInstances(kt,ae,F.count);else if(H.isInstancedBufferGeometry){const wt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,pe=Math.min(H.instanceCount,wt);Wt.renderInstances(kt,ae,pe)}else Wt.render(kt,ae)};function Zt(E,N,H){E.transparent===!0&&E.side===ke&&E.forceSinglePass===!1?(E.side=we,E.needsUpdate=!0,mi(E,N,H),E.side=vn,E.needsUpdate=!0,mi(E,N,H),E.side=ke):mi(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),c=zt.get(H),c.init(N),x.push(c),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(c.pushLight(F),F.castShadow&&c.pushShadow(F))}),c.setupLights();const z=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const nt=F.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){const bt=nt[ut];Zt(bt,H,F),z.add(bt)}else Zt(nt,H,F),z.add(nt)}),c=x.pop(),z},this.compileAsync=function(E,N,H=null){const z=this.compile(E,N,H);return new Promise(F=>{function nt(){if(z.forEach(function(ut){At.get(ut).currentProgram.isReady()&&z.delete(ut)}),z.size===0){F(E);return}setTimeout(nt,10)}It.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ne=null;function Xe(E){Ne&&Ne(E)}function gs(){on.stop()}function bs(){on.start()}const on=new xa;on.setAnimationLoop(Xe),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(E){Ne=E,X.setAnimationLoop(E),E===null?on.stop():on.start()},X.addEventListener("sessionstart",gs),X.addEventListener("sessionend",bs),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,N,C),c=zt.get(E,x.length),c.init(N),x.push(c),rt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),O.setFromProjectionMatrix(rt),et=this.localClippingEnabled,Z=it.init(this.clippingPlanes,et),d=vt.get(E,T.length),d.init(),T.push(d),X.enabled===!0&&X.isPresenting===!0){const nt=g.xr.getDepthSensingMesh();nt!==null&&cr(nt,N,-1/0,g.sortObjects)}cr(E,N,0,g.sortObjects),d.finish(),g.sortObjects===!0&&d.sort(lt,ht),Nt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Nt&&Pt.addToRenderList(d,E),this.info.render.frame++,Z===!0&&it.beginShadows();const H=c.state.shadowsArray;xt.render(H,E,N),Z===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=d.opaque,F=d.transmissive;if(c.setupLights(),N.isArrayCamera){const nt=N.cameras;if(F.length>0)for(let ut=0,bt=nt.length;ut<bt;ut++){const Et=nt[ut];xs(z,F,E,Et)}Nt&&Pt.render(E);for(let ut=0,bt=nt.length;ut<bt;ut++){const Et=nt[ut];vs(d,E,Et,Et.viewport)}}else F.length>0&&xs(z,F,E,N),Nt&&Pt.render(E),vs(d,E,N);C!==null&&A===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(g,E,N),Qt.resetDefaultState(),b=-1,m=null,x.pop(),x.length>0?(c=x[x.length-1],Z===!0&&it.setGlobalState(g.clippingPlanes,c.state.camera)):c=null,T.pop(),T.length>0?d=T[T.length-1]:d=null};function cr(E,N,H,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)c.pushLight(E),E.castShadow&&c.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||O.intersectsSprite(E)){z&&ct.setFromMatrixPosition(E.matrixWorld).applyMatrix4(rt);const ut=K.update(E),bt=E.material;bt.visible&&d.push(E,ut,bt,H,ct.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||O.intersectsObject(E))){const ut=K.update(E),bt=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ct.copy(E.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),ct.copy(ut.boundingSphere.center)),ct.applyMatrix4(E.matrixWorld).applyMatrix4(rt)),Array.isArray(bt)){const Et=ut.groups;for(let Lt=0,Ut=Et.length;Lt<Ut;Lt++){const yt=Et[Lt],kt=bt[yt.materialIndex];kt&&kt.visible&&d.push(E,ut,kt,H,ct.z,yt)}}else bt.visible&&d.push(E,ut,bt,H,ct.z,null)}}const nt=E.children;for(let ut=0,bt=nt.length;ut<bt;ut++)cr(nt[ut],N,H,z)}function vs(E,N,H,z){const F=E.opaque,nt=E.transmissive,ut=E.transparent;c.setupLightsView(H),Z===!0&&it.setGlobalState(g.clippingPlanes,H),z&&Mt.viewport(y.copy(z)),F.length>0&&_i(F,N,H),nt.length>0&&_i(nt,N,H),ut.length>0&&_i(ut,N,H),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function xs(E,N,H,z){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;c.state.transmissionRenderTarget[z.id]===void 0&&(c.state.transmissionRenderTarget[z.id]=new zn(1,1,{generateMipmaps:!0,type:It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float")?er:bn,minFilter:ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const nt=c.state.transmissionRenderTarget[z.id],ut=z.viewport||y;nt.setSize(ut.z*g.transmissionResolutionScale,ut.w*g.transmissionResolutionScale);const bt=g.getRenderTarget();g.setRenderTarget(nt),g.getClearColor(B),q=g.getClearAlpha(),q<1&&g.setClearColor(16777215,.5),g.clear(),Nt&&Pt.render(H);const Et=g.toneMapping;g.toneMapping=rn;const Lt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),c.setupLightsView(z),Z===!0&&it.setGlobalState(g.clippingPlanes,z),_i(E,H,z),R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Ut=!1;for(let yt=0,kt=N.length;yt<kt;yt++){const Kt=N[yt],ae=Kt.object,se=Kt.geometry,Wt=Kt.material,wt=Kt.group;if(Wt.side===ke&&ae.layers.test(z.layers)){const pe=Wt.side;Wt.side=we,Wt.needsUpdate=!0,Ss(ae,H,z,se,Wt,wt),Wt.side=pe,Wt.needsUpdate=!0,Ut=!0}}Ut===!0&&(R.updateMultisampleRenderTarget(nt),R.updateRenderTargetMipmap(nt))}g.setRenderTarget(bt),g.setClearColor(B,q),Lt!==void 0&&(z.viewport=Lt),g.toneMapping=Et}function _i(E,N,H){const z=N.isScene===!0?N.overrideMaterial:null;for(let F=0,nt=E.length;F<nt;F++){const ut=E[F],bt=ut.object,Et=ut.geometry,Lt=ut.group;let Ut=ut.material;Ut.allowOverride===!0&&z!==null&&(Ut=z),bt.layers.test(H.layers)&&Ss(bt,N,H,Et,Ut,Lt)}}function Ss(E,N,H,z,F,nt){E.onBeforeRender(g,N,H,z,F,nt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(g,N,H,z,E,nt),F.transparent===!0&&F.side===ke&&F.forceSinglePass===!1?(F.side=we,F.needsUpdate=!0,g.renderBufferDirect(H,N,z,F,E,nt),F.side=vn,F.needsUpdate=!0,g.renderBufferDirect(H,N,z,F,E,nt),F.side=ke):g.renderBufferDirect(H,N,z,F,E,nt),E.onAfterRender(g,N,H,z,F,nt)}function mi(E,N,H){N.isScene!==!0&&(N=Ct);const z=At.get(E),F=c.state.lights,nt=c.state.shadowsArray,ut=F.state.version,bt=Tt.getParameters(E,F.state,nt,N,H),Et=Tt.getProgramCacheKey(bt);let Lt=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?V:v).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Lt===void 0&&(E.addEventListener("dispose",Ot),Lt=new Map,z.programs=Lt);let Ut=Lt.get(Et);if(Ut!==void 0){if(z.currentProgram===Ut&&z.lightsStateVersion===ut)return Ms(E,bt),Ut}else bt.uniforms=Tt.getUniforms(E),E.onBeforeCompile(bt,g),Ut=Tt.acquireProgram(bt,Et),Lt.set(Et,Ut),z.uniforms=bt.uniforms;const yt=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(yt.clippingPlanes=it.uniform),Ms(E,bt),z.needsLights=za(E),z.lightsStateVersion=ut,z.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),z.currentProgram=Ut,z.uniformsList=null,Ut}function Es(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Xi.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Ms(E,N){const H=At.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Ga(E,N,H,z,F){N.isScene!==!0&&(N=Ct),R.resetTextureUnits();const nt=N.fog,ut=z.isMeshStandardMaterial?N.environment:null,bt=C===null?g.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:nr,Et=(z.isMeshStandardMaterial?V:v).get(z.envMap||ut),Lt=z.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ut=!!H.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),yt=!!H.morphAttributes.position,kt=!!H.morphAttributes.normal,Kt=!!H.morphAttributes.color;let ae=rn;z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ae=g.toneMapping);const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Wt=se!==void 0?se.length:0,wt=At.get(z),pe=c.state.lights;if(Z===!0&&(et===!0||E!==m)){const be=E===m&&z.id===b;it.setState(z,E,be)}let Yt=!1;z.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==pe.state.version||wt.outputColorSpace!==bt||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==Et||z.fog===!0&&wt.fog!==nt||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==Lt||wt.vertexTangents!==Ut||wt.morphTargets!==yt||wt.morphNormals!==kt||wt.morphColors!==Kt||wt.toneMapping!==ae||wt.morphTargetsCount!==Wt)&&(Yt=!0):(Yt=!0,wt.__version=z.version);let Fe=wt.currentProgram;Yt===!0&&(Fe=mi(z,N,F));let Mn=!1,Me=!1,Yn=!1;const ee=Fe.getUniforms(),Re=wt.uniforms;if(Mt.useProgram(Fe.program)&&(Mn=!0,Me=!0,Yn=!0),z.id!==b&&(b=z.id,Me=!0),Mn||m!==E){Mt.buffers.depth.getReversed()?(J.copy(E.projectionMatrix),Za(J),$a(J),ee.setValue(P,"projectionMatrix",J)):ee.setValue(P,"projectionMatrix",E.projectionMatrix),ee.setValue(P,"viewMatrix",E.matrixWorldInverse);const Se=ee.map.cameraPosition;Se!==void 0&&Se.setValue(P,st.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&ee.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&ee.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),m!==E&&(m=E,Me=!0,Yn=!0)}if(F.isSkinnedMesh){ee.setOptional(P,F,"bindMatrix"),ee.setOptional(P,F,"bindMatrixInverse");const be=F.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ee.setValue(P,"boneTexture",be.boneTexture,R))}F.isBatchedMesh&&(ee.setOptional(P,F,"batchingTexture"),ee.setValue(P,"batchingTexture",F._matricesTexture,R),ee.setOptional(P,F,"batchingIdTexture"),ee.setValue(P,"batchingIdTexture",F._indirectTexture,R),ee.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&ee.setValue(P,"batchingColorTexture",F._colorsTexture,R));const Ce=H.morphAttributes;if((Ce.position!==void 0||Ce.normal!==void 0||Ce.color!==void 0)&&Dt.update(F,H,Fe),(Me||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,ee.setValue(P,"receiveShadow",F.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Re.envMap.value=Et,Re.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Re.envMapIntensity.value=N.environmentIntensity),Me&&(ee.setValue(P,"toneMappingExposure",g.toneMappingExposure),wt.needsLights&&Ha(Re,Yn),nt&&z.fog===!0&&pt.refreshFogUniforms(Re,nt),pt.refreshMaterialUniforms(Re,z,k,Y,c.state.transmissionRenderTarget[E.id]),Xi.upload(P,Es(wt),Re,R)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Xi.upload(P,Es(wt),Re,R),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&ee.setValue(P,"center",F.center),ee.setValue(P,"modelViewMatrix",F.modelViewMatrix),ee.setValue(P,"normalMatrix",F.normalMatrix),ee.setValue(P,"modelMatrix",F.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const be=z.uniformsGroups;for(let Se=0,lr=be.length;Se<lr;Se++){const an=be[Se];L.update(an,Fe),L.bind(an,Fe)}}return Fe}function Ha(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function za(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,N,H){const z=At.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),At.get(E.texture).__webglTexture=N,At.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:H,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,N){const H=At.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const ka=P.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){C=E,w=N,A=H;let z=!0,F=null,nt=!1,ut=!1;if(E){const Et=At.get(E);if(Et.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(P.FRAMEBUFFER,null),z=!1;else if(Et.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Et.__hasExternalTextures)R.rebindTextures(E,At.get(E.texture).__webglTexture,At.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const yt=E.depthTexture;if(Et.__boundDepthTexture!==yt){if(yt!==null&&At.has(yt)&&(E.width!==yt.image.width||E.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Lt=E.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(ut=!0);const Ut=At.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ut[N])?F=Ut[N][H]:F=Ut[N],nt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?F=At.get(E).__webglMultisampledFramebuffer:Array.isArray(Ut)?F=Ut[H]:F=Ut,y.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else y.copy(ft).multiplyScalar(k).floor(),U.copy(at).multiplyScalar(k).floor(),D=dt;if(H!==0&&(F=ka),Mt.bindFramebuffer(P.FRAMEBUFFER,F)&&z&&Mt.drawBuffers(E,F),Mt.viewport(y),Mt.scissor(U),Mt.setScissorTest(D),nt){const Et=At.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Et.__webglTexture,H)}else if(ut){const Et=At.get(E.texture),Lt=N;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Et.__webglTexture,H,Lt)}else if(E!==null&&H!==0){const Et=At.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Et.__webglTexture,H)}b=-1},this.readRenderTargetPixels=function(E,N,H,z,F,nt,ut){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(bt=bt[ut]),bt){Mt.bindFramebuffer(P.FRAMEBUFFER,bt);try{const Et=E.texture,Lt=Et.format,Ut=Et.type;if(!Ft.textureFormatReadable(Lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&H>=0&&H<=E.height-F&&P.readPixels(N,H,z,F,Bt.convert(Lt),Bt.convert(Ut),nt)}finally{const Et=C!==null?At.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,z,F,nt,ut){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=At.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ut!==void 0&&(bt=bt[ut]),bt)if(N>=0&&N<=E.width-z&&H>=0&&H<=E.height-F){Mt.bindFramebuffer(P.FRAMEBUFFER,bt);const Et=E.texture,Lt=Et.format,Ut=Et.type;if(!Ft.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.bufferData(P.PIXEL_PACK_BUFFER,nt.byteLength,P.STREAM_READ),P.readPixels(N,H,z,F,Bt.convert(Lt),Bt.convert(Ut),0);const kt=C!==null?At.get(C).__webglFramebuffer:null;Mt.bindFramebuffer(P.FRAMEBUFFER,kt);const Kt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ja(P,Kt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,yt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,nt),P.deleteBuffer(yt),P.deleteSync(Kt),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,N=null,H=0){const z=Math.pow(2,-H),F=Math.floor(E.image.width*z),nt=Math.floor(E.image.height*z),ut=N!==null?N.x:0,bt=N!==null?N.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,ut,bt,F,nt),Mt.unbindTexture()};const Wa=P.createFramebuffer(),Xa=P.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,z=null,F=0,nt=null){nt===null&&(F!==0?(zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),nt=F,F=0):nt=0);let ut,bt,Et,Lt,Ut,yt,kt,Kt,ae;const se=E.isCompressedTexture?E.mipmaps[nt]:E.image;if(H!==null)ut=H.max.x-H.min.x,bt=H.max.y-H.min.y,Et=H.isBox3?H.max.z-H.min.z:1,Lt=H.min.x,Ut=H.min.y,yt=H.isBox3?H.min.z:0;else{const Ce=Math.pow(2,-F);ut=Math.floor(se.width*Ce),bt=Math.floor(se.height*Ce),E.isDataArrayTexture?Et=se.depth:E.isData3DTexture?Et=Math.floor(se.depth*Ce):Et=1,Lt=0,Ut=0,yt=0}z!==null?(kt=z.x,Kt=z.y,ae=z.z):(kt=0,Kt=0,ae=0);const Wt=Bt.convert(N.format),wt=Bt.convert(N.type);let pe;N.isData3DTexture?(R.setTexture3D(N,0),pe=P.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),pe=P.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),pe=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);const Yt=P.getParameter(P.UNPACK_ROW_LENGTH),Fe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),Me=P.getParameter(P.UNPACK_SKIP_ROWS),Yn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Lt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,yt);const ee=E.isDataArrayTexture||E.isData3DTexture,Re=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const Ce=At.get(E),be=At.get(N),Se=At.get(Ce.__renderTarget),lr=At.get(be.__renderTarget);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Se.__webglFramebuffer),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,lr.__webglFramebuffer);for(let an=0;an<Et;an++)ee&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.get(E).__webglTexture,F,yt+an),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,At.get(N).__webglTexture,nt,ae+an)),P.blitFramebuffer(Lt,Ut,ut,bt,kt,Kt,ut,bt,P.DEPTH_BUFFER_BIT,P.NEAREST);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||E.isRenderTargetTexture||At.has(E)){const Ce=At.get(E),be=At.get(N);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,Wa),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Xa);for(let Se=0;Se<Et;Se++)ee?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ce.__webglTexture,F,yt+Se):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ce.__webglTexture,F),Re?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,nt,ae+Se):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,be.__webglTexture,nt),F!==0?P.blitFramebuffer(Lt,Ut,ut,bt,kt,Kt,ut,bt,P.COLOR_BUFFER_BIT,P.NEAREST):Re?P.copyTexSubImage3D(pe,nt,kt,Kt,ae+Se,Lt,Ut,ut,bt):P.copyTexSubImage2D(pe,nt,kt,Kt,Lt,Ut,ut,bt);Mt.bindFramebuffer(P.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Re?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(pe,nt,kt,Kt,ae,ut,bt,Et,Wt,wt,se.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(pe,nt,kt,Kt,ae,ut,bt,Et,Wt,se.data):P.texSubImage3D(pe,nt,kt,Kt,ae,ut,bt,Et,Wt,wt,se):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,nt,kt,Kt,ut,bt,Wt,wt,se.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,nt,kt,Kt,se.width,se.height,Wt,se.data):P.texSubImage2D(P.TEXTURE_2D,nt,kt,Kt,ut,bt,Wt,wt,se);P.pixelStorei(P.UNPACK_ROW_LENGTH,Yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Fe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Me),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Yn),nt===0&&N.generateMipmaps&&P.generateMipmap(pe),Mt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,z=null,F=0){return zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,H,z,F)},this.initRenderTarget=function(E){At.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),Mt.unbindTexture()},this.resetState=function(){w=0,A=0,C=null,Mt.reset(),Qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}}var ap=Object.defineProperty,W=(n,t,e)=>(((i,r,s)=>{r in i?ap(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s})(n,typeof t!="symbol"?t+"":t,e),e);const Je=new Int32Array(2),Co=new Float32Array(Je.buffer),Io=new Float64Array(Je.buffer),Si=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var Kr,Ei;(Ei=Kr||(Kr={}))[Ei.UTF8_BYTES=1]="UTF8_BYTES",Ei[Ei.UTF16_STRING=2]="UTF16_STRING";class Sn{constructor(t){this.bytes_=t,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(t){return new Sn(new Uint8Array(t))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(t){this.position_=t}capacity(){return this.bytes_.length}readInt8(t){return this.readUint8(t)<<24>>24}readUint8(t){return this.bytes_[t]}readInt16(t){return this.readUint16(t)<<16>>16}readUint16(t){return this.bytes_[t]|this.bytes_[t+1]<<8}readInt32(t){return this.bytes_[t]|this.bytes_[t+1]<<8|this.bytes_[t+2]<<16|this.bytes_[t+3]<<24}readUint32(t){return this.readInt32(t)>>>0}readInt64(t){return BigInt.asIntN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readUint64(t){return BigInt.asUintN(64,BigInt(this.readUint32(t))+(BigInt(this.readUint32(t+4))<<BigInt(32)))}readFloat32(t){return Je[0]=this.readInt32(t),Co[0]}readFloat64(t){return Je[Si?0:1]=this.readInt32(t),Je[Si?1:0]=this.readInt32(t+4),Io[0]}writeInt8(t,e){this.bytes_[t]=e}writeUint8(t,e){this.bytes_[t]=e}writeInt16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeUint16(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8}writeInt32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeUint32(t,e){this.bytes_[t]=e,this.bytes_[t+1]=e>>8,this.bytes_[t+2]=e>>16,this.bytes_[t+3]=e>>24}writeInt64(t,e){this.writeInt32(t,Number(BigInt.asIntN(32,e))),this.writeInt32(t+4,Number(BigInt.asIntN(32,e>>BigInt(32))))}writeUint64(t,e){this.writeUint32(t,Number(BigInt.asUintN(32,e))),this.writeUint32(t+4,Number(BigInt.asUintN(32,e>>BigInt(32))))}writeFloat32(t,e){Co[0]=e,this.writeInt32(t,Je[0])}writeFloat64(t,e){Io[0]=e,this.writeInt32(t,Je[Si?0:1]),this.writeInt32(t+4,Je[Si?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+4+4)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let t="";for(let e=0;e<4;e++)t+=String.fromCharCode(this.readInt8(this.position_+4+e));return t}__offset(t,e){const i=t-this.readInt32(t);return e<this.readInt16(i)?this.readInt16(i+e):0}__union(t,e){return t.bb_pos=e+this.readInt32(e),t.bb=this,t}__string(t,e){t+=this.readInt32(t);const i=this.readInt32(t);t+=4;const r=this.bytes_.subarray(t,t+i);return e===Kr.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(t,e){return typeof t=="string"?this.__string(e):this.__union(t,e)}__indirect(t){return t+this.readInt32(t)}__vector(t){return t+this.readInt32(t)+4}__vector_len(t){return this.readInt32(t+this.readInt32(t))}__has_identifier(t){if(t.length!=4)throw new Error("FlatBuffers: file identifier must be length 4");for(let e=0;e<4;e++)if(t.charCodeAt(e)!=this.readInt8(this.position()+4+e))return!1;return!0}createScalarList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s)}return i}createObjList(t,e){const i=[];for(let r=0;r<e;++r){const s=t(r);s!==null&&i.push(s.unpack())}return i}}class pi{constructor(t){let e;this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder,e=t||1024,this.bb=Sn.allocate(e),this.space=e}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(t){this.force_defaults=t}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(t,e){t>this.minalign&&(this.minalign=t);const i=1+~(this.bb.capacity()-this.space+e)&t-1;for(;this.space<i+t+e;){const r=this.bb.capacity();this.bb=pi.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(t){for(let e=0;e<t;e++)this.bb.writeInt8(--this.space,0)}writeInt8(t){this.bb.writeInt8(this.space-=1,t)}writeInt16(t){this.bb.writeInt16(this.space-=2,t)}writeInt32(t){this.bb.writeInt32(this.space-=4,t)}writeInt64(t){this.bb.writeInt64(this.space-=8,t)}writeFloat32(t){this.bb.writeFloat32(this.space-=4,t)}writeFloat64(t){this.bb.writeFloat64(this.space-=8,t)}addInt8(t){this.prep(1,0),this.writeInt8(t)}addInt16(t){this.prep(2,0),this.writeInt16(t)}addInt32(t){this.prep(4,0),this.writeInt32(t)}addInt64(t){this.prep(8,0),this.writeInt64(t)}addFloat32(t){this.prep(4,0),this.writeFloat32(t)}addFloat64(t){this.prep(8,0),this.writeFloat64(t)}addFieldInt8(t,e,i){(this.force_defaults||e!=i)&&(this.addInt8(e),this.slot(t))}addFieldInt16(t,e,i){(this.force_defaults||e!=i)&&(this.addInt16(e),this.slot(t))}addFieldInt32(t,e,i){(this.force_defaults||e!=i)&&(this.addInt32(e),this.slot(t))}addFieldInt64(t,e,i){(this.force_defaults||e!==i)&&(this.addInt64(e),this.slot(t))}addFieldFloat32(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat32(e),this.slot(t))}addFieldFloat64(t,e,i){(this.force_defaults||e!=i)&&(this.addFloat64(e),this.slot(t))}addFieldOffset(t,e,i){(this.force_defaults||e!=i)&&(this.addOffset(e),this.slot(t))}addFieldStruct(t,e,i){e!=i&&(this.nested(e),this.slot(t))}nested(t){if(t!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(t){this.vtable!==null&&(this.vtable[t]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(t){const e=t.capacity();if(3221225472&e)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=e<<1,r=Sn.allocate(i);return r.setPosition(i-e),r.bytes().set(t.bytes(),i-e),r}addOffset(t){this.prep(4,0),this.writeInt32(this.offset()-t+4)}startObject(t){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=t;for(let e=0;e<t;e++)this.vtable[e]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const t=this.offset();let e=this.vtable_in_use-1;for(;e>=0&&this.vtable[e]==0;e--);const i=e+1;for(;e>=0;e--)this.addInt16(this.vtable[e]!=0?t-this.vtable[e]:0);this.addInt16(t-this.object_start);const r=2*(i+2);this.addInt16(r);let s=0;const a=this.space;t:for(e=0;e<this.vtables.length;e++){const o=this.bb.capacity()-this.vtables[e];if(r==this.bb.readInt16(o)){for(let l=2;l<r;l+=2)if(this.bb.readInt16(a+l)!=this.bb.readInt16(o+l))continue t;s=this.vtables[e];break}}return s?(this.space=this.bb.capacity()-t,this.bb.writeInt32(this.space,s-t)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-t,this.offset()-t)),this.isNested=!1,t}finish(t,e,i){const r=i?4:0;if(e){const s=e;if(this.prep(this.minalign,8+r),s.length!=4)throw new TypeError("FlatBuffers: file identifier must be length 4");for(let a=3;a>=0;a--)this.writeInt8(s.charCodeAt(a))}this.prep(this.minalign,4+r),this.addOffset(t),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(t,e){this.finish(t,e,!0)}requiredField(t,e){const i=this.bb.capacity()-t,r=i-this.bb.readInt32(i);if(!(e<this.bb.readInt16(r)&&this.bb.readInt16(r+e)!=0))throw new TypeError("FlatBuffers: field "+e+" must be set")}startVector(t,e,i){this.notNested(),this.vector_num_elems=e,this.prep(4,t*e),this.prep(i,t*e)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(t){if(!t)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(t))return this.string_maps.get(t);const e=this.createString(t);return this.string_maps.set(t,e),e}createString(t){if(t==null)return 0;let e;return e=t instanceof Uint8Array?t:this.text_encoder.encode(t),this.addInt8(0),this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector()}createByteVector(t){return t==null?0:(this.startVector(1,t.length,1),this.bb.setPosition(this.space-=t.length),this.bb.bytes().set(t,this.space),this.endVector())}createObjectOffset(t){return t===null?0:typeof t=="string"?this.createString(t):t.pack(this)}createObjectOffsetList(t){const e=[];for(let i=0;i<t.length;++i){const r=t[i];if(r===null)throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");e.push(this.createObjectOffset(r))}return e}createStructOffsetList(t,e){return e(this,t.length),this.createObjectOffsetList(t.slice().reverse()),this.endVector()}}class fi{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}x(){return this.bb.readFloat32(this.bb_pos)}mutate_x(t){return this.bb.writeFloat32(this.bb_pos+0,t),!0}y(){return this.bb.readFloat32(this.bb_pos+4)}mutate_y(t){return this.bb.writeFloat32(this.bb_pos+4,t),!0}z(){return this.bb.readFloat32(this.bb_pos+8)}mutate_z(t){return this.bb.writeFloat32(this.bb_pos+8,t),!0}static sizeOf(){return 12}static createFloatVector(t,e,i,r){return t.prep(4,12),t.writeFloat32(r),t.writeFloat32(i),t.writeFloat32(e),t.offset()}}var cp=(n=>(n[n.NONE=0]="NONE",n[n.WIRE=1]="WIRE",n[n.WIRE_SET=2]="WIRE_SET",n[n.CIRCLE_CURVE=3]="CIRCLE_CURVE",n))(cp||{});class lp{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}min(t){return(t||new fi).__init(this.bb_pos,this.bb)}max(t){return(t||new fi).__init(this.bb_pos+12,this.bb)}static sizeOf(){return 24}static createBoundingBox(t,e,i,r,s,a,o){return t.prep(4,24),t.prep(4,12),t.writeFloat32(o),t.writeFloat32(a),t.writeFloat32(s),t.prep(4,12),t.writeFloat32(r),t.writeFloat32(i),t.writeFloat32(e),t.offset()}}class Aa{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}x(){return this.bb.readFloat64(this.bb_pos)}mutate_x(t){return this.bb.writeFloat64(this.bb_pos+0,t),!0}y(){return this.bb.readFloat64(this.bb_pos+8)}mutate_y(t){return this.bb.writeFloat64(this.bb_pos+8,t),!0}z(){return this.bb.readFloat64(this.bb_pos+16)}mutate_z(t){return this.bb.writeFloat64(this.bb_pos+16,t),!0}static sizeOf(){return 24}static createDoubleVector(t,e,i,r){return t.prep(8,24),t.writeFloat64(r),t.writeFloat64(i),t.writeFloat64(e),t.offset()}}class fp{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}position(t){return(t||new Aa).__init(this.bb_pos,this.bb)}xDirection(t){return(t||new fi).__init(this.bb_pos+24,this.bb)}yDirection(t){return(t||new fi).__init(this.bb_pos+36,this.bb)}static sizeOf(){return 48}static createTransform(t,e,i,r,s,a,o,l,f,p){return t.prep(8,48),t.prep(4,12),t.writeFloat32(p),t.writeFloat32(f),t.writeFloat32(l),t.prep(4,12),t.writeFloat32(o),t.writeFloat32(a),t.writeFloat32(s),t.prep(8,24),t.writeFloat64(r),t.writeFloat64(i),t.writeFloat64(e),t.offset()}}var dp=(n=>(n[n.NONE=0]="NONE",n[n.LINES=1]="LINES",n[n.ELLIPSE_ARC=2]="ELLIPSE_ARC",n[n.CLOTHOID=3]="CLOTHOID",n[n.PARABOLA=4]="PARABOLA",n))(dp||{}),up=(n=>(n[n.ONE=0]="ONE",n[n.TWO=1]="TWO",n))(up||{}),hp=(n=>(n[n.NONE=0]="NONE",n[n.SHELL=1]="SHELL",n[n.CIRCLE_EXTRUSION=2]="CIRCLE_EXTRUSION",n))(hp||{}),pp=(n=>(n[n.DEFAULT=0]="DEFAULT",n))(pp||{}),_p=(n=>(n[n.LINE=0]="LINE",n[n.SHELL=1]="SHELL",n))(_p||{}),mp=(n=>(n[n.UPDATE=0]="UPDATE",n[n.CREATE=1]="CREATE",n[n.DELETE=2]="DELETE",n[n.FINISH=3]="FINISH",n))(mp||{}),gp=(n=>(n[n.GEOMETRY=0]="GEOMETRY",n[n.WIRES=1]="WIRES",n[n.INVISIBLE=2]="INVISIBLE",n))(gp||{}),bp=(n=>(n[n.CREATE_MODEL=0]="CREATE_MODEL",n[n.DELETE_MODEL=1]="DELETE_MODEL",n[n.EXECUTE=2]="EXECUTE",n[n.RAYCAST=3]="RAYCAST",n[n.FETCH_BOXES=4]="FETCH_BOXES",n[n.REFRESH_VIEW=5]="REFRESH_VIEW",n[n.RECOMPUTE_MESHES=6]="RECOMPUTE_MESHES",n[n.CREATE_MATERIAL=7]="CREATE_MATERIAL",n[n.THROW_ERROR=8]="THROW_ERROR",n))(bp||{}),vp=(n=>(n[n.VISIBLE=0]="VISIBLE",n))(vp||{}),xp=(n=>(n[n.POINT=0]="POINT",n[n.LINE=1]="LINE",n[n.FACE=2]="FACE",n))(xp||{});class Po{static containedInParallelPlanes(t,e){let i=!0;for(const r of t){const s=r.distanceToPoint(e);i=i&&s>=0}return i}static collides(t,e,i){for(const r of e)if(this.getPointDistance(r,i,t)<0)return!1;return!0}static getPointDistance(t,e,i){const r=t.normal;for(const s of this.dimensions){const a=r[s]>=0!==e;this.tempPoint[s]=a?i.max[s]:i.min[s]}return t.distanceToPoint(this.tempPoint)}}W(Po,"tempPoint",new tt),W(Po,"dimensions",["x","y","z"]);var Uo={exports:{}};function Mi(n,t,e){e=e||2;var i,r,s,a,o,l,f,p=t&&t.length,h=p?t[0]*e:n.length,u=Do(n,0,h,e,!0),_=[];if(!u||u.next===u.prev)return _;if(p&&(u=function(S,d,c,T){var x,g,I,w=[];for(x=0,g=d.length;x<g;x++)(I=Do(S,d[x]*T,x<g-1?d[x+1]*T:S.length,T,!1))===I.next&&(I.steiner=!0),w.push(Rp(I));for(w.sort(Ap),x=0;x<w.length;x++)c=yp(w[x],c);return c}(n,t,u,e)),n.length>80*e){i=s=n[0],r=a=n[1];for(var M=e;M<h;M+=e)(o=n[M])<i&&(i=o),(l=n[M+1])<r&&(r=l),o>s&&(s=o),l>a&&(a=l);f=(f=Math.max(s-i,a-r))!==0?32767/f:0}return di(u,_,e,i,r,f,0),_}function Do(n,t,e,i,r){var s,a;if(r===$r(n,t,e,i)>0)for(s=t;s<e;s+=i)a=Lo(s,n[s],n[s+1],a);else for(s=e-i;s>=t;s-=i)a=Lo(s,n[s],n[s+1],a);return a&&sr(a,a.next)&&(hi(a),a=a.next),a}function En(n,t){if(!n)return n;t||(t=n);var e,i=n;do if(e=!1,i.steiner||!sr(i,i.next)&&ie(i.prev,i,i.next)!==0)i=i.next;else{if(hi(i),(i=t=i.prev)===i.next)break;e=!0}while(e||i!==t);return t}function di(n,t,e,i,r,s,a){if(n){!a&&s&&function(p,h,u,_){var M=p;do M.z===0&&(M.z=Yr(M.x,M.y,h,u,_)),M.prevZ=M.prev,M.nextZ=M.next,M=M.next;while(M!==p);M.prevZ.nextZ=null,M.prevZ=null,function(S){var d,c,T,x,g,I,w,A,C=1;do{for(c=S,S=null,g=null,I=0;c;){for(I++,T=c,w=0,d=0;d<C&&(w++,T=T.nextZ);d++);for(A=C;w>0||A>0&&T;)w!==0&&(A===0||!T||c.z<=T.z)?(x=c,c=c.nextZ,w--):(x=T,T=T.nextZ,A--),g?g.nextZ=x:S=x,x.prevZ=g,g=x;c=T}g.nextZ=null,C*=2}while(I>1)}(M)}(n,i,r,s);for(var o,l,f=n;n.prev!==n.next;)if(o=n.prev,l=n.next,s?Ep(n,i,r,s):Sp(n))t.push(o.i/e|0),t.push(n.i/e|0),t.push(l.i/e|0),hi(n),n=l.next,f=l.next;else if((n=l)===f){a?a===1?di(n=Mp(En(n),t,e),t,e,i,r,s,2):a===2&&Tp(n,t,e,i,r,s):di(En(n),t,e,i,r,s,1);break}}}function Sp(n){var t=n.prev,e=n,i=n.next;if(ie(t,e,i)>=0)return!1;for(var r=t.x,s=e.x,a=i.x,o=t.y,l=e.y,f=i.y,p=r<s?r<a?r:a:s<a?s:a,h=o<l?o<f?o:f:l<f?l:f,u=r>s?r>a?r:a:s>a?s:a,_=o>l?o>f?o:f:l>f?l:f,M=i.next;M!==t;){if(M.x>=p&&M.x<=u&&M.y>=h&&M.y<=_&&Vn(r,o,s,l,a,f,M.x,M.y)&&ie(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Ep(n,t,e,i){var r=n.prev,s=n,a=n.next;if(ie(r,s,a)>=0)return!1;for(var o=r.x,l=s.x,f=a.x,p=r.y,h=s.y,u=a.y,_=o<l?o<f?o:f:l<f?l:f,M=p<h?p<u?p:u:h<u?h:u,S=o>l?o>f?o:f:l>f?l:f,d=p>h?p>u?p:u:h>u?h:u,c=Yr(_,M,t,e,i),T=Yr(S,d,t,e,i),x=n.prevZ,g=n.nextZ;x&&x.z>=c&&g&&g.z<=T;){if(x.x>=_&&x.x<=S&&x.y>=M&&x.y<=d&&x!==r&&x!==a&&Vn(o,p,l,h,f,u,x.x,x.y)&&ie(x.prev,x,x.next)>=0||(x=x.prevZ,g.x>=_&&g.x<=S&&g.y>=M&&g.y<=d&&g!==r&&g!==a&&Vn(o,p,l,h,f,u,g.x,g.y)&&ie(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;x&&x.z>=c;){if(x.x>=_&&x.x<=S&&x.y>=M&&x.y<=d&&x!==r&&x!==a&&Vn(o,p,l,h,f,u,x.x,x.y)&&ie(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;g&&g.z<=T;){if(g.x>=_&&g.x<=S&&g.y>=M&&g.y<=d&&g!==r&&g!==a&&Vn(o,p,l,h,f,u,g.x,g.y)&&ie(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function Mp(n,t,e){var i=n;do{var r=i.prev,s=i.next.next;!sr(r,s)&&ya(r,i,i.next,s)&&ui(r,s)&&ui(s,r)&&(t.push(r.i/e|0),t.push(i.i/e|0),t.push(s.i/e|0),hi(i),hi(i.next),i=n=s),i=i.next}while(i!==n);return En(i)}function Tp(n,t,e,i,r,s){var a=n;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&Cp(a,o)){var l=wa(a,o);return a=En(a,a.next),l=En(l,l.next),di(a,t,e,i,r,s,0),void di(l,t,e,i,r,s,0)}o=o.next}a=a.next}while(a!==n)}function Ap(n,t){return n.x-t.x}function yp(n,t){var e=function(r,s){var a,o=s,l=r.x,f=r.y,p=-1/0;do{if(f<=o.y&&f>=o.next.y&&o.next.y!==o.y){var h=o.x+(f-o.y)*(o.next.x-o.x)/(o.next.y-o.y);if(h<=l&&h>p&&(p=h,a=o.x<o.next.x?o:o.next,h===l))return a}o=o.next}while(o!==s);if(!a)return null;var u,_=a,M=a.x,S=a.y,d=1/0;o=a;do l>=o.x&&o.x>=M&&l!==o.x&&Vn(f<S?l:p,f,M,S,f<S?p:l,f,o.x,o.y)&&(u=Math.abs(f-o.y)/(l-o.x),ui(o,r)&&(u<d||u===d&&(o.x>a.x||o.x===a.x&&wp(a,o)))&&(a=o,d=u)),o=o.next;while(o!==_);return a}(n,t);if(!e)return t;var i=wa(e,n);return En(i,i.next),En(e,e.next)}function wp(n,t){return ie(n.prev,n,t.prev)<0&&ie(t.next,n,n.next)<0}function Yr(n,t,e,i,r){return(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=(n-e)*r|0)|n<<8))|n<<4))|n<<2))|n<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=(t-i)*r|0)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function Rp(n){var t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function Vn(n,t,e,i,r,s,a,o){return(r-a)*(t-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(i-o)}function Cp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!function(e,i){var r=e;do{if(r.i!==e.i&&r.next.i!==e.i&&r.i!==i.i&&r.next.i!==i.i&&ya(r,r.next,e,i))return!0;r=r.next}while(r!==e);return!1}(n,t)&&(ui(n,t)&&ui(t,n)&&function(e,i){var r=e,s=!1,a=(e.x+i.x)/2,o=(e.y+i.y)/2;do r.y>o!=r.next.y>o&&r.next.y!==r.y&&a<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(s=!s),r=r.next;while(r!==e);return s}(n,t)&&(ie(n.prev,n,t.prev)||ie(n,t.prev,t))||sr(n,t)&&ie(n.prev,n,n.next)>0&&ie(t.prev,t,t.next)>0)}function ie(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function sr(n,t){return n.x===t.x&&n.y===t.y}function ya(n,t,e,i){var r=Ai(ie(n,t,e)),s=Ai(ie(n,t,i)),a=Ai(ie(e,i,n)),o=Ai(ie(e,i,t));return r!==s&&a!==o||!(r!==0||!Ti(n,e,t))||!(s!==0||!Ti(n,i,t))||!(a!==0||!Ti(e,n,i))||!(o!==0||!Ti(e,t,i))}function Ti(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ai(n){return n>0?1:n<0?-1:0}function ui(n,t){return ie(n.prev,n,n.next)<0?ie(n,t,n.next)>=0&&ie(n,n.prev,t)>=0:ie(n,t,n.prev)<0||ie(n,n.next,t)<0}function wa(n,t){var e=new Zr(n.i,n.x,n.y),i=new Zr(t.i,t.x,t.y),r=n.next,s=t.prev;return n.next=t,t.prev=n,e.next=r,r.prev=e,i.next=e,e.prev=i,s.next=i,i.prev=s,i}function Lo(n,t,e,i){var r=new Zr(n,t,e);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function hi(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Zr(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $r(n,t,e,i){for(var r=0,s=t,a=e-i;s<e;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}Uo.exports=Mi,Uo.exports.default=Mi,Mi.deviation=function(n,t,e,i){var r=t&&t.length,s=r?t[0]*e:n.length,a=Math.abs($r(n,0,s,e));if(r)for(var o=0,l=t.length;o<l;o++){var f=t[o]*e,p=o<l-1?t[o+1]*e:n.length;a-=Math.abs($r(n,f,p,e))}var h=0;for(o=0;o<i.length;o+=3){var u=i[o]*e,_=i[o+1]*e,M=i[o+2]*e;h+=Math.abs((n[u]-n[M])*(n[_+1]-n[u+1])-(n[u]-n[_])*(n[M+1]-n[u+1]))}return a===0&&h===0?0:Math.abs((h-a)/a)},Mi.flatten=function(n){for(var t=n[0][0].length,e={vertices:[],holes:[],dimensions:t},i=0,r=0;r<n.length;r++){for(var s=0;s<n[r].length;s++)for(var a=0;a<t;a++)e.vertices.push(n[r][s][a]);r>0&&(i+=n[r-1].length,e.holes.push(i))}return e};class Ip{constructor(){W(this,"int"),W(this,"float"),W(this,"buffer"),W(this,"s1",4),W(this,"s2",8);const{intBuffer:t,floatBuffer:e,buffer:i}=this.newBuffers();this.int=t,this.float=e,this.buffer=i}newBuffers(){const t=new Int32Array(1),e=t.buffer;return{intBuffer:t,floatBuffer:new Float32Array(e),buffer:new Uint8Array(e)}}}class jr{static check(t){const e=Number.isInteger(t),i=t<this._max,r=t>this._min;return e&&i&&r}}W(jr,"_max",2147483647),W(jr,"_min",-2147483648);const Pp=class Ra{constructor(){W(this,"_core",new Ip),W(this,"_handlers"),W(this,"_result",-1),W(this,"handleObject",t=>{const e=Object.keys(t);for(const i of e)t.hasOwnProperty(i)&&this.compute(t[i])}),W(this,"handleString",t=>{const e=t.length;for(let i=0;i<e;++i){const r=t.codePointAt(i);this._core.int[0]=r,this.update()}}),W(this,"handleBoolean",t=>{this._core.int[0]=t?1:0,this.update()}),W(this,"handleNumber",t=>{(jr.check(t)?this._core.int:this._core.float)[0]=t,this.update()}),this._handlers=this.newHandlers()}get value(){return~this._result}fromMaterialData(t){const{modelId:e,objectClass:i,currentLod:r,templateId:s,...a}=t;this.reset(),this.compute(e),this.compute(i),this.compute(a),this.compute(r),this.compute(s!==void 0)}generate(t){this.reset();for(const e of t)this.compute(e);return this.value}compute(t){return this.getHandler(t)(t),this}reset(){return this._result=-1,this}getHandler(t){const e=typeof t,i=this._handlers[e];if(!i)throw new Error("Fragments: Unsupported input type");return i}newHandlers(){return{number:this.handleNumber,boolean:this.handleBoolean,string:this.handleString,object:this.handleObject}}update(){for(let t=0;t<this._core.s1;++t){this._result^=this._core.buffer[t];for(let e=0;e<this._core.s2;++e)1&this._result?this._result=this._result>>1^Ra._polynomial:this._result>>=1}}};W(Pp,"_polynomial",2197175160);const Mr=class qi{constructor(t,e){W(this,"_first"),this._first=this.newData(t,e)}static getComplementary(t,e){let i=0;const r=t.position.length;i=this.makeBufferComplementary(r,t,i,e),i!==1/0&&e(i,1/0)}static get(t,e,i,r){const{filtered:s,position:a,size:o}=this.getData(t,i);return this.setAllBufferData(s,e,a,o,r),{position:a,size:o}}fullOf(t){const e=this._first.following,i=this._first.data;return e===null&&i===t}update(t,e){const i=this.getBufferData(t);if(i.data!==e){const{a:r,c:s,b:a}=this.newBuffers(t,i,e);this.setupInputData(i,r,s),this.setupUpdateBuffers(r,a,s)}}size(t){let e=0,i=this._first;for(;i!==null;)this.doesFilterPass(t,i)&&e++,i=i.following;return e}static setAllBufferData(t,e,i,r,s){for(let a=0;a<t.length;++a){const o=t[a];this.transform(o,e),this.setBuffers(i,r,a),s&&s(a,o.data)}}static makeBufferComplementary(t,e,i,r){for(let s=0;s<t;++s){const a=this.getBuffers(e,s),{position:o,size:l}=a;o>i&&r(i,o-i),i=o+l}return i}static setBuffers(t,e,i){t[i]=this._tempData.position;const r=this._tempData.size===1/0;e[i]=r?this._inf:this._tempData.size}add(t,e,i){if(!qi._stash.length)return this.newData(e,i,t);const r=qi._stash.pop();if(!r)throw new Error("Fragments: No stash found");return r.position=t,r.size=e,r.data=i,r}remove(t){t&&(t.following=null,t.past=null,qi._stash.push(t))}static getData(t,e){const i=t.filter(e),r=i.length;return{filtered:i,position:new Uint32Array(r),size:new Uint32Array(r)}}filter(t){const e=[];let i=this._first;for(;i!==null;)this.doesFilterPass(t,i)&&e.push(i),i=i.following;return e}static transform(t,e){const i=this.getTempData(),r=t.position+t.size,s=r===e.length;if(i.position=e[t.position],s)i.size=1/0;else{const a=e[r];i.size=a-i.position}return i}static getBuffers(t,e){const i=t.position[e];let r;return r=t.size[e]===this._inf?1/0:t.size[e],{position:i,size:r}}static getTempData(){return this._tempData?this._tempData:{position:0,size:0}}doesFilterPass(t,e){return!t||t(e.data)}setupUpdateBuffers(t,e,i){this.chainBuffers(t,e,i),this.setupFirstBuffer(t,e),this.setupLastBuffer(i,e),this.setupMiddleBufferStart(e),this.setupMiddleBufferEnd(e)}setupMiddleBufferEnd(t){var e;if(((e=t.following)==null?void 0:e.data)===t.data){if(!t.following)return;const i=t.following.size+t.size,r=t.following.following;t.size=i,this.remove(t.following),t.following=r,t.following&&(t.following.past=t)}}setupFirstBuffer(t,e){t.size||(t.past?t.past.following=e:this._first=e,e.past=t.past,this.remove(t))}setupMiddleBufferStart(t){var e;if(((e=t.past)==null?void 0:e.data)===t.data){if(!t.past)return;t.size=t.past.size+t.size,t.position=t.past.position;const i=t.past.past;this.remove(t.past),t.past=i,t.past?t.past.following=t:this._first=t}}chainBuffers(t,e,i){t.following=e,e.past=t,e.following=i,i.past=e}setupLastBuffer(t,e){t.size||(t.following&&(t.following.past=e),e.following=t.following,this.remove(t))}newBuffers(t,e,i){const r=t-e.position,s=this.add(e.position,r,e.data),a=this.add(t,1,i),o=e.size-s.size-1;return{a:s,c:this.add(t+1,o,e.data),b:a}}setupInputData(t,e,i){t.past?(t.past.following=e,e.past=t.past):this._first=e,t.following&&(t.following.past=i,i.following=t.following),this.remove(t)}newData(t,e,i=0){return{position:i,size:t,past:null,following:null,data:e}}getBufferData(t){let e=this._first;for(;;){const i=e===null,r=e.position<=t,s=t<e.position+e.size;if(i||r&&s)return e;e=e.following}}};W(Mr,"_stash",[]),W(Mr,"_tempData",{position:0,size:0}),W(Mr,"_inf",4294967295);class An{static fixNumber(t){return Number.isNaN(t)?0:Number.isFinite(t)?t:0}static forEach(t,e){if(Array.isArray(t)){let i=0;for(const r of t)e(r,i++)}else e(t,0)}}class Up{static estimateCapacity(){const t=this.capacityFactor,e=window.screen.width,i=window.screen.height,r=window.devicePixelRatio;return Math.trunc(e*i*r*r*t)}}W(Up,"capacityFactor",200);class Hn{static parseMaterial(t){const e=t.r()/255,i=t.g()/255,r=t.b()/255,s=t.a()/255,a=t.a()<255;return{color:new Gt(e,i,r),renderedFaces:t.renderedFaces(),opacity:s,transparent:a}}static parseBox(t,e){this.getBox(t,e,"min"),this.getBox(t,e,"max")}static parseTransform(t,e){return this.getVector(t,"position",this._doubleVector),this.getVector(t,"xDirection",this._floatVector),this.getVector(t,"yDirection",this._floatVector),this.computeZVector(),this.setTransform(e),e}static setTransform(t){const{x:e,y:i,z:r}=this._temp.xDirection,{x:s,y:a,z:o}=this._temp.yDirection,{x:l,y:f,z:p}=this._temp.zDirection,{x:h,y:u,z:_}=this._temp.position;t.set(e,s,l,h,i,a,f,u,r,o,p,_,0,0,0,1)}static getBox(t,e,i){t[i](this._floatVector);const r=this._floatVector.x(),s=this._floatVector.y(),a=this._floatVector.z();e[i].x=An.fixNumber(r),e[i].y=An.fixNumber(s),e[i].z=An.fixNumber(a)}static getVector(t,e,i){t[e](i);const r=this._temp[e],s=i.x(),a=i.y(),o=i.z();r.x=An.fixNumber(s),r.y=An.fixNumber(a),r.z=An.fixNumber(o)}static computeZVector(){this._temp.zDirection.crossVectors(this._temp.xDirection,this._temp.yDirection)}}W(Hn,"_temp",{position:new tt,xDirection:new tt,yDirection:new tt,zDirection:new tt}),W(Hn,"_doubleVector",new Aa),W(Hn,"_floatVector",new fi);const Te=class{static get(n,t,e){this.fetchSampleTransform(n,t),this.fetchItemTransform(n,t),e.multiplyMatrices(this._item,this._sample)}static getBox(n,t){n.bbox(this._box),Hn.parseBox(this._box,t)}static getBoxData(n){this._min.copy(n.min),this._max.copy(n.max),this._center.addVectors(this._min,this._max),this._center.divideScalar(2),n.getSize(this._distance)}static boxSize(n){return this.getBoxData(n),this.applyTransformer(),this._edge.start=this._min.clone(),this._edge.end=this._max.clone(),this._edge}static applyTransformer(){const{x:n,y:t,z:e}=this._distance,i=Math.max(n,t,e);n===i?this._transformers.x():t===i?this._transformers.y():this._transformers.z()}static fetchItemTransform(n,t){const e=n.item();t.globalTransforms(e,this._transform),Hn.parseTransform(this._transform,this._item)}static fetchSampleTransform(n,t){const e=n.localTransform();t.localTransforms(e,this._transform),Hn.parseTransform(this._transform,this._sample)}static setBoxZ(){this._min.set(this._center.x,this._center.y,this._min.z),this._max.set(this._center.x,this._center.y,this._max.z)}static setBoxY(){this._min.set(this._center.x,this._min.y,this._center.z),this._max.set(this._center.x,this._max.y,this._center.z)}static setBoxX(){this._min.set(this._min.x,this._center.y,this._center.z),this._max.set(this._max.x,this._center.y,this._center.z)}};W(Te,"_transform",new fp),W(Te,"_min",new tt),W(Te,"_max",new tt),W(Te,"_center",new tt),W(Te,"_distance",new tt),W(Te,"_edge",new Ge),W(Te,"_item",new qt),W(Te,"_sample",new qt),W(Te,"_box",new lp),W(Te,"_transformers",{x:()=>Te.setBoxX(),y:()=>Te.setBoxY(),z:()=>Te.setBoxZ()});W(class{static getWidth(n){return n.getSize(this._temp.vector),this._temp.vector.x>this._temp.vector.y&&this._temp.vector.set(this._temp.vector.y,this._temp.vector.x,this._temp.vector.z),this._temp.vector.y>this._temp.vector.z&&this._temp.vector.set(this._temp.vector.x,this._temp.vector.z,this._temp.vector.y),this._temp.vector.x>this._temp.vector.y&&this._temp.vector.set(this._temp.vector.y,this._temp.vector.x,this._temp.vector.z),this._temp.vector.y}},"_temp",{vector:new tt});new xe;new tt;ot.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new oe(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}},He.line={uniforms:hs.merge([ot.common,ot.fog,ot.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new de;new tt;new tt;new de;new de;new de;new tt;new qt;new Ge;new tt;new xe;new va;new de;class Ji{}W(Ji,"vertex",`
            #include <common>
            #include <clipping_planes_pars_vertex>

            attribute float itemFilter;
            uniform vec2 lodSize;
            attribute vec3 itemFirst;
            attribute vec3 itemLast;

            float lodWidth = 2.0;
            
            void cutLodLine(const in vec4 first, inout vec4 second ) {
                float projValue1 = projectionMatrix[2][2];
                float projValue2 = projectionMatrix[3][2];
                float approxResult = -(projValue2 / projValue1) / 2.0;
                float diff1 = approxResult - first.z;
                float diff2 = second.z - first.z;
                float cutFilter = diff1 / diff2;
                second.xyz = mix(first.xyz, second.xyz, cutFilter);
            }
                
            void main() {
                if (itemFilter == 0.0) {
                    gl_Position = vec4(0,0,0,0);
                    return;
                }

                vec4 rawFirst = vec4(itemFirst, 1.0);
                vec4 rawLast = vec4(itemLast, 1.0);
                vec4 first = modelViewMatrix * rawFirst;
                vec4 last = modelViewMatrix * rawLast;
                
                bool lodPerspective = projectionMatrix[2][3] == -1.0;
                if (lodPerspective) {
                    bool firstCut = first.z < 0.0 && last.z >= 0.0;
                    bool lastCut = last.z < 0.0 && first.z >= 0.0;
                    if (firstCut) {
                        cutLodLine( first, last );
                    } else if (lastCut) {
                        cutLodLine( last, first );
                    }
                }

                vec4 firstCut = projectionMatrix * first;
                vec4 lastCut = projectionMatrix * last;
                vec3 firstNdc = firstCut.xyz / firstCut.w;
                vec3 lastNdc = lastCut.xyz / lastCut.w;

                vec2 lodOrientation = lastNdc.xy - firstNdc.xy;

                float lodRatio = lodSize.x / lodSize.y;
                lodOrientation.x *= lodRatio;
                lodOrientation = normalize(lodOrientation);
                
                vec2 lodDistance = vec2(lodOrientation.y, - lodOrientation.x);
                lodOrientation.x /= lodRatio;
                lodDistance.x /= lodRatio;

                if (position.x < 0.0) { 
                    lodDistance *= - 1.0;
                }

                if (position.y < 0.0) {
                    lodDistance += -lodOrientation;
                } else if (position.y > 1.0) {
                    lodDistance += lodOrientation;
                }

                lodDistance *= lodWidth;
                lodDistance /= lodSize.y;

                bool isFirst = position.y < 0.5;
                vec4 lodPosition = isFirst ? firstCut : lastCut;
                lodDistance *= lodPosition.w;
                lodPosition.xy += lodDistance;
                gl_Position = lodPosition;

                vec4 mvPosition = isFirst ? first : last;
                #include <clipping_planes_vertex>
            }
    `),W(Ji,"fragment",`
            #include <common>
            #include <clipping_planes_pars_fragment>

            uniform vec3 lodColor;
            uniform float lodOpacity;

            void main() {
                #include <clipping_planes_fragment>
                gl_FragColor = vec4(lodColor, lodOpacity);
                #include <colorspace_fragment>
            }
    `);const yi=class Qe{static setupLodMeshResize(t){t.onBeforeRender=e=>{e.getSize(t.material[0].lodSize)}}static setupLodAttributes(t){t.setIndex(Qe.indices),t.setAttribute("position",Qe.vertices)}static setLodBuffer(t,e,i){let r=t.getItemFirst(),s=t.getItemLast(),a=this.setItemFirst(t,r,e,s);({itemFirst:r,dataBuffer:a,itemLast:s}=this.resetAttributes(r,a,e,s)),this.setupFinish(i,a),t.setAttribute("itemFirst",r),t.setAttribute("itemLast",s)}static setLodVisibility(t,e){const i=this.setupItemFilter(t);this.applyVisibilityState(t,e,i),i.needsUpdate=!0}static getInterAttribute(t,e){return t.getAttribute(e)}static computeLodSphere(t){if(!t.boundingSphere)return;const e=t.getItemFirst();if(e){const i=Qe.getLodMidPoint(t,e),r=Qe.getLodRadius(i,e);t.boundingSphere.radius=r}}static newLodMaterialParams(t){const e={lodColor:{value:new Gt(t.color)},lodSize:{value:new oe(1,1)},lodOpacity:{value:t.opacity??1}};return{uniforms:hs.merge([ot.common,e]),transparent:t.transparent??!1,vertexShader:Ji.vertex,fragmentShader:Ji.fragment}}static setLodFilter(t,e){const i=t.getItemFilter(),r=i.array;for(let s=0;s<e.position.length;++s){const a=e.position[s]/2,o=e.size[s]/2;o===4294967295?r.fill(1,a):r.fill(1,a,a+o)}i.needsUpdate=!0}static getInstancedAttribute(t,e){return t.getAttribute(e)}static computeLodBox(t){if(!t.boundingBox)return;const e=t.getItemFirst();if(e){const i=e.data.array;t.boundingBox.setFromArray(i)}else t.boundingBox.makeEmpty()}static setDataBuffer(t,e,i){return(t=e.data).array=i,t.needsUpdate=!0,t}static disposeAllData(t){delete t.attributes.itemFilter,delete t.attributes.position,t.index=null,t.dispose(),Qe.setupLodAttributes(t)}static setItemFirst(t,e,i,r){let s=null;return e&&(i.length===e.data.array.length?s=this.setDataBuffer(s,e,i):(e=void 0,this.disposeAllData(t))),s}static setupFinish(t,e){t&&(e.onUploadCallback=t)}static resetAttributes(t,e,i,r){return t||(e=new Ml(i,6,1),t=new io(e,3,0),r=new io(e,3,3)),{itemFirst:t,dataBuffer:e,itemLast:r}}static setupItemFilter(t){const e=t.getItemFirst().count;let i=t.getItemFilter();return i?i.array.fill(0):(i=new Tl(new Uint8Array(e),1),t.setAttribute("itemFilter",i)),i}static applyVisibilityState(t,e,i){e!==!0?e&&this.setLodFilter(t,e):i.array.fill(1)}static getLodMidPoint(t,e){const i=t.boundingSphere.center;return this.tempBox.setFromArray(e.data.array),this.tempBox.getCenter(i),i}static getLodRadius(t,e){let i=0;const r=e.data.array.length;for(let s=0;s<r;s+=3){const a=e.data.array;Qe.tempVec.fromArray(a,s);const o=t.distanceToSquared(Qe.tempVec);i=Math.max(i,o)}return Math.sqrt(i)}};W(yi,"tempVec",new tt),W(yi,"tempBox",new xe),W(yi,"vertices",new Sl([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),W(yi,"indices",new El([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5],1));/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */function Kn(n){let t=n.length;for(;--t>=0;)n[t]=0}const Dp=30,Lp=new Array(576);Kn(Lp);const Np=new Array(60);Kn(Np);const Fp=new Array(512);Kn(Fp);const Op=new Array(256);Kn(Op);const Bp=new Array(29);Kn(Bp);const Vp=new Array(Dp);Kn(Vp);try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{}const Qr=new Uint8Array(256);for(let n=0;n<256;n++)Qr[n]=n>=252?6:n>=248?5:n>=240?4:n>=224?3:n>=192?2:1;Qr[254]=Qr[254]=1;class No extends vl{constructor(t,e,i,r){if(super(t,e,i),W(this,"fragment"),W(this,"material"),W(this,"geometry"),Array.isArray(e)||(e=[e]),this.material=e,!t.index)throw new Error("The geometry for fragments must be indexed!");this.geometry=t,this.fragment=r;const s=t.index.count;t.groups.length||t.groups.push({start:0,count:s,materialIndex:0})}exportData(){const t=this.geometry.attributes.position.array,e=this.geometry.attributes.normal.array,i=Array.from(this.geometry.index.array),r=[];for(const l of this.geometry.groups){const f=l.materialIndex||0,{start:p,count:h}=l;r.push(p,h,f)}const s=[];if(Array.isArray(this.material))for(const l of this.material){const f=l.opacity,p=l.transparent?1:0,h=new Gt(l.color).toArray();s.push(f,p,...h)}const a=Array.from(this.instanceMatrix.array);let o;return o=this.instanceColor!==null?Array.from(this.instanceColor.array):[],{position:t,normal:e,index:i,groups:r,materials:s,matrices:a,colors:o}}clone(t){throw new Error("Fragment meshes can't be cloned directly. Use mesh.fragment.clone instead!")}}const Tr=1.25,or=65535,Gp=Math.pow(2,-24),Ar=Symbol("SKIP_GENERATION");function Xn(n){return function(t){return t.index?t.index.count:t.attributes.position.count}(n)/3}function Hp(n,t){if(!n.index){const e=n.attributes.position.count,i=function(r,s=ArrayBuffer){return r>65535?new Uint32Array(new s(4*r)):new Uint16Array(new s(2*r))}(e,t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer);n.setIndex(new Le(i,1));for(let r=0;r<e;r++)i[r]=r}}function Ca(n){const t=Xn(n),e=n.drawRange,i=e.start/3,r=(e.start+e.count)/3,s=Math.max(0,i),a=Math.min(t,r)-s;return[{offset:Math.floor(s),count:Math.floor(a)}]}function Ia(n){if(!n.groups||!n.groups.length)return Ca(n);const t=[],e=new Set,i=n.drawRange,r=i.start/3,s=(i.start+i.count)/3;for(const o of n.groups){const l=o.start/3,f=(o.start+o.count)/3;e.add(Math.max(r,l)),e.add(Math.min(s,f))}const a=Array.from(e.values()).sort((o,l)=>o-l);for(let o=0;o<a.length-1;o++){const l=a[o],f=a[o+1];t.push({offset:Math.floor(l),count:Math.floor(f-l)})}return t}function ne(n,t,e){return e.min.x=t[n],e.min.y=t[n+1],e.min.z=t[n+2],e.max.x=t[n+3],e.max.y=t[n+4],e.max.z=t[n+5],e}function Fo(n){let t=-1,e=-1/0;for(let i=0;i<3;i++){const r=n[i+3]-n[i];r>e&&(e=r,t=i)}return t}function Oo(n,t){t.set(n)}function Bo(n,t,e){let i,r;for(let s=0;s<3;s++){const a=s+3;i=n[s],r=t[s],e[s]=i<r?i:r,i=n[a],r=t[a],e[a]=i>r?i:r}}function wi(n,t,e){for(let i=0;i<3;i++){const r=t[n+2*i],s=t[n+2*i+1],a=r-s,o=r+s;a<e[i]&&(e[i]=a),o>e[i+3]&&(e[i+3]=o)}}function $n(n){const t=n[3]-n[0],e=n[4]-n[1],i=n[5]-n[2];return 2*(t*e+e*i+i*t)}function yr(n,t,e,i,r=null){let s=1/0,a=1/0,o=1/0,l=-1/0,f=-1/0,p=-1/0,h=1/0,u=1/0,_=1/0,M=-1/0,S=-1/0,d=-1/0;const c=r!==null;for(let T=6*t,x=6*(t+e);T<x;T+=6){const g=n[T+0],I=n[T+1],w=g-I,A=g+I;w<s&&(s=w),A>l&&(l=A),c&&g<h&&(h=g),c&&g>M&&(M=g);const C=n[T+2],b=n[T+3],m=C-b,y=C+b;m<a&&(a=m),y>f&&(f=y),c&&C<u&&(u=C),c&&C>S&&(S=C);const U=n[T+4],D=n[T+5],B=U-D,q=U+D;B<o&&(o=B),q>p&&(p=q),c&&U<_&&(_=U),c&&U>d&&(d=U)}i[0]=s,i[1]=a,i[2]=o,i[3]=l,i[4]=f,i[5]=p,c&&(r[0]=h,r[1]=u,r[2]=_,r[3]=M,r[4]=S,r[5]=d)}const Ki=32,zp=(n,t)=>n.candidate-t.candidate,je=new Array(Ki).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Ri=new Float32Array(6);class Ci{constructor(){}}function kp(n,t,e,i,r,s){let a=i,o=i+r-1;const l=s.pos,f=2*s.axis;for(;;){for(;a<=o&&e[6*a+f]<l;)a++;for(;a<=o&&e[6*o+f]>=l;)o--;if(!(a<o))return a;for(let p=0;p<3;p++){let h=t[3*a+p];t[3*a+p]=t[3*o+p],t[3*o+p]=h}for(let p=0;p<6;p++){let h=e[6*a+p];e[6*a+p]=e[6*o+p],e[6*o+p]=h}a++,o--}}function Wp(n,t,e,i,r,s){let a=i,o=i+r-1;const l=s.pos,f=2*s.axis;for(;;){for(;a<=o&&e[6*a+f]<l;)a++;for(;a<=o&&e[6*o+f]>=l;)o--;if(!(a<o))return a;{let p=n[a];n[a]=n[o],n[o]=p;for(let h=0;h<6;h++){let u=e[6*a+h];e[6*a+h]=e[6*o+h],e[6*o+h]=u}a++,o--}}}function Xp(n,t){const e=n.geometry,i=e.index?e.index.array:null,r=t.maxDepth,s=t.verbose,a=t.maxLeafTris,o=t.strategy,l=t.onProgress,f=Xn(e),p=n._indirectBuffer;let h=!1;const u=new Float32Array(6),_=new Float32Array(6),M=function(g,I){var w;(w=I)[0]=w[1]=w[2]=1/0,w[3]=w[4]=w[5]=-1/0;const A=g.attributes.position,C=g.index?g.index.array:null,b=Xn(g),m=new Float32Array(6*b),y=A.normalized,U=A.array,D=A.offset||0;let B=3;A.isInterleavedBufferAttribute&&(B=A.data.stride);const q=["getX","getY","getZ"];for(let G=0;G<b;G++){const Y=3*G,k=6*G;let lt=Y+0,ht=Y+1,ft=Y+2;C&&(lt=C[lt],ht=C[ht],ft=C[ft]),y||(lt=lt*B+D,ht=ht*B+D,ft=ft*B+D);for(let at=0;at<3;at++){let dt,O,Z;y?(dt=A[q[at]](lt),O=A[q[at]](ht),Z=A[q[at]](ft)):(dt=U[lt+at],O=U[ht+at],Z=U[ft+at]);let et=dt;O<et&&(et=O),Z<et&&(et=Z);let J=dt;O>J&&(J=O),Z>J&&(J=Z);const rt=(J-et)/2,st=2*at;m[k+st+0]=et+rt,m[k+st+1]=rt+(Math.abs(et)+rt)*Gp,et<I[at]&&(I[at]=et),J>I[at+3]&&(I[at+3]=J)}}return m}(e,u),S=t.indirect?Wp:kp,d=[],c=t.indirect?Ca(e):Ia(e);if(c.length===1){const g=c[0],I=new Ci;I.boundingData=u,function(w,A,C,b){let m=1/0,y=1/0,U=1/0,D=-1/0,B=-1/0,q=-1/0;for(let G=6*A,Y=6*(A+C);G<Y;G+=6){const k=w[G+0];k<m&&(m=k),k>D&&(D=k);const lt=w[G+2];lt<y&&(y=lt),lt>B&&(B=lt);const ht=w[G+4];ht<U&&(U=ht),ht>q&&(q=ht)}b[0]=m,b[1]=y,b[2]=U,b[3]=D,b[4]=B,b[5]=q}(M,g.offset,g.count,_),x(I,g.offset,g.count,_),d.push(I)}else for(let g of c){const I=new Ci;I.boundingData=new Float32Array(6),yr(M,g.offset,g.count,I.boundingData,_),x(I,g.offset,g.count,_),d.push(I)}return d;function T(g){l&&l(g/f)}function x(g,I,w,A=null,C=0){if(!h&&C>=r&&(h=!0,s&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(e))),w<=a||C>=r)return T(I+w),g.offset=I,g.count=w,g;const b=function(y,U,D,B,q,G){let Y=-1,k=0;if(G===0)Y=Fo(U),Y!==-1&&(k=(U[Y]+U[Y+3])/2);else if(G===1)Y=Fo(y),Y!==-1&&(k=function(lt,ht,ft,at){let dt=0;for(let O=ht,Z=ht+ft;O<Z;O++)dt+=lt[6*O+2*at];return dt/ft}(D,B,q,Y));else if(G===2){const lt=$n(y);let ht=Tr*q;const ft=6*B,at=6*(B+q);for(let dt=0;dt<3;dt++){const O=U[dt],Z=(U[dt+3]-O)/Ki;if(q<8){const et=[...je];et.length=q;let J=0;for(let st=ft;st<at;st+=6,J++){const ct=et[J];ct.candidate=D[st+2*dt],ct.count=0;const{bounds:Ct,leftCacheBounds:Nt,rightCacheBounds:Rt}=ct;for(let P=0;P<3;P++)Rt[P]=1/0,Rt[P+3]=-1/0,Nt[P]=1/0,Nt[P+3]=-1/0,Ct[P]=1/0,Ct[P+3]=-1/0;wi(st,D,Ct)}et.sort(zp);let rt=q;for(let st=0;st<rt;st++){const ct=et[st];for(;st+1<rt&&et[st+1].candidate===ct.candidate;)et.splice(st+1,1),rt--}for(let st=ft;st<at;st+=6){const ct=D[st+2*dt];for(let Ct=0;Ct<rt;Ct++){const Nt=et[Ct];ct>=Nt.candidate?wi(st,D,Nt.rightCacheBounds):(wi(st,D,Nt.leftCacheBounds),Nt.count++)}}for(let st=0;st<rt;st++){const ct=et[st],Ct=ct.count,Nt=q-ct.count,Rt=ct.leftCacheBounds,P=ct.rightCacheBounds;let jt=0;Ct!==0&&(jt=$n(Rt)/lt);let It=0;Nt!==0&&(It=$n(P)/lt);const Ft=1+Tr*(jt*Ct+It*Nt);Ft<ht&&(Y=dt,ht=Ft,k=ct.candidate)}}else{for(let rt=0;rt<Ki;rt++){const st=je[rt];st.count=0,st.candidate=O+Z+rt*Z;const ct=st.bounds;for(let Ct=0;Ct<3;Ct++)ct[Ct]=1/0,ct[Ct+3]=-1/0}for(let rt=ft;rt<at;rt+=6){let st=~~((D[rt+2*dt]-O)/Z);st>=Ki&&(st=31);const ct=je[st];ct.count++,wi(rt,D,ct.bounds)}const et=je[31];Oo(et.bounds,et.rightCacheBounds);for(let rt=30;rt>=0;rt--){const st=je[rt],ct=je[rt+1];Bo(st.bounds,ct.rightCacheBounds,st.rightCacheBounds)}let J=0;for(let rt=0;rt<31;rt++){const st=je[rt],ct=st.count,Ct=st.bounds,Nt=je[rt+1].rightCacheBounds;ct!==0&&(J===0?Oo(Ct,Ri):Bo(Ct,Ri,Ri)),J+=ct;let Rt=0,P=0;J!==0&&(Rt=$n(Ri)/lt);const jt=q-J;jt!==0&&(P=$n(Nt)/lt);const It=1+Tr*(Rt*J+P*jt);It<ht&&(Y=dt,ht=It,k=st.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${G} used.`);return{axis:Y,pos:k}}(g.boundingData,A,M,I,w,o);if(b.axis===-1)return T(I+w),g.offset=I,g.count=w,g;const m=S(p,i,M,I,w,b);if(m===I||m===I+w)T(I+w),g.offset=I,g.count=w;else{g.splitAxis=b.axis;const y=new Ci,U=I,D=m-I;g.left=y,y.boundingData=new Float32Array(6),yr(M,U,D,y.boundingData,_),x(y,U,D,_,C+1);const B=new Ci,q=m,G=w-D;g.right=B,B.boundingData=new Float32Array(6),yr(M,q,G,B.boundingData,_),x(B,q,G,_,C+1)}return g}}function qp(n,t){const e=n.geometry;t.indirect&&(n._indirectBuffer=function(h,u){const _=(h.index?h.index.count:h.attributes.position.count)/3,M=_>65536,S=M?4:2,d=u?new SharedArrayBuffer(_*S):new ArrayBuffer(_*S),c=M?new Uint32Array(d):new Uint16Array(d);for(let T=0,x=c.length;T<x;T++)c[T]=T;return c}(e,t.useSharedArrayBuffer),function(h){if(h.groups.length===0)return!1;const u=Xn(h),_=Ia(h).sort((d,c)=>d.offset-c.offset),M=_[_.length-1];M.count=Math.min(u-M.offset,M.count);let S=0;return _.forEach(({count:d})=>S+=d),u!==S}(e)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),n._indirectBuffer||Hp(e,t);const i=Xp(n,t);let r,s,a;const o=[],l=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer;for(let h=0;h<i.length;h++){const u=i[h],_=new l(32*f(u));r=new Float32Array(_),s=new Uint32Array(_),a=new Uint16Array(_),p(0,u),o.push(_)}return void(n._roots=o);function f(h){return h.count?1:1+f(h.left)+f(h.right)}function p(h,u){const _=h/4,M=h/2,S=!!u.count,d=u.boundingData;for(let c=0;c<6;c++)r[_+c]=d[c];if(S){const c=u.offset,T=u.count;return s[_+6]=c,a[M+14]=T,a[M+15]=or,h+32}{const c=u.left,T=u.right,x=u.splitAxis;let g;if(g=p(h+32,c),g/4>Math.pow(2,32))throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return s[_+6]=g/4,g=p(g,T),s[_+7]=x,g}}}class $e{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let i=1/0,r=-1/0;for(let s=0,a=t.length;s<a;s++){const o=t[s][e];i=o<i?o:i,r=o>r?o:r}this.min=i,this.max=r}setFromPoints(t,e){let i=1/0,r=-1/0;for(let s=0,a=e.length;s<a;s++){const o=e[s],l=t.dot(o);i=l<i?l:i,r=l>r?l:r}this.min=i,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}$e.prototype.setFromBox=function(){const n=new tt;return function(t,e){const i=e.min,r=e.max;let s=1/0,a=-1/0;for(let o=0;o<=1;o++)for(let l=0;l<=1;l++)for(let f=0;f<=1;f++){n.x=i.x*o+r.x*(1-o),n.y=i.y*l+r.y*(1-l),n.z=i.z*f+r.z*(1-f);const p=t.dot(n);s=Math.min(p,s),a=Math.max(p,a)}this.min=s,this.max=a}}();const Kp=function(){const n=new tt,t=new tt,e=new tt;return function(i,r,s){const a=i.start,o=n,l=r.start,f=t;e.subVectors(a,l),n.subVectors(i.end,i.start),t.subVectors(r.end,r.start);const p=e.dot(f),h=f.dot(o),u=f.dot(f),_=e.dot(o),M=o.dot(o)*u-h*h;let S,d;S=M!==0?(p*h-_*u)/M:0,d=(p+S*h)/u,s.x=S,s.y=d}}(),Jr=function(){const n=new oe,t=new tt,e=new tt;return function(i,r,s,a){Kp(i,r,n);let o=n.x,l=n.y;if(o>=0&&o<=1&&l>=0&&l<=1)return i.at(o,s),void r.at(l,a);if(o>=0&&o<=1)return l<0?r.at(0,a):r.at(1,a),void i.closestPointToPoint(a,!0,s);if(l>=0&&l<=1)return o<0?i.at(0,s):i.at(1,s),void r.closestPointToPoint(s,!0,a);{let f,p;f=o<0?i.start:i.end,p=l<0?r.start:r.end;const h=t,u=e;return i.closestPointToPoint(p,!0,t),r.closestPointToPoint(f,!0,e),h.distanceToSquared(p)<=u.distanceToSquared(f)?(s.copy(h),void a.copy(p)):(s.copy(f),void a.copy(u))}}}(),Yp=function(){const n=new tt,t=new tt,e=new us,i=new Ge;return function(r,s){const{radius:a,center:o}=r,{a:l,b:f,c:p}=s;if(i.start=l,i.end=f,i.closestPointToPoint(o,!0,n).distanceTo(o)<=a||(i.start=l,i.end=p,i.closestPointToPoint(o,!0,n).distanceTo(o)<=a)||(i.start=f,i.end=p,i.closestPointToPoint(o,!0,n).distanceTo(o)<=a))return!0;const h=s.getPlane(e);if(Math.abs(h.distanceToPoint(o))<=a){const u=h.projectPoint(o,t);if(s.containsPoint(u))return!0}return!1}}();function wr(n){return Math.abs(n)<1e-15}class ze extends ii{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new tt),this.satBounds=new Array(4).fill().map(()=>new $e),this.points=[this.a,this.b,this.c],this.sphere=new va,this.plane=new us,this.needsUpdate=!0}intersectsSphere(t){return Yp(t,this)}update(){const t=this.a,e=this.b,i=this.c,r=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,r);const f=s[1],p=a[1];f.subVectors(t,e),p.setFromPoints(f,r);const h=s[2],u=a[2];h.subVectors(e,i),u.setFromPoints(h,r);const _=s[3],M=a[3];_.subVectors(i,t),M.setFromPoints(_,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}ze.prototype.closestPointToSegment=function(){const n=new tt,t=new tt,e=new Ge;return function(i,r=null,s=null){const{start:a,end:o}=i,l=this.points;let f,p=1/0;for(let h=0;h<3;h++){const u=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[u]),Jr(e,i,n,t),f=n.distanceToSquared(t),f<p&&(p=f,r&&r.copy(n),s&&s.copy(t))}return this.closestPointToPoint(a,n),f=a.distanceToSquared(n),f<p&&(p=f,r&&r.copy(n),s&&s.copy(a)),this.closestPointToPoint(o,n),f=o.distanceToSquared(n),f<p&&(p=f,r&&r.copy(n),s&&s.copy(o)),Math.sqrt(p)}}(),ze.prototype.intersectsTriangle=function(){const n=new ze,t=new Array(3),e=new Array(3),i=new $e,r=new $e,s=new tt,a=new tt,o=new tt,l=new tt,f=new tt,p=new Ge,h=new Ge,u=new Ge,_=new tt;function M(S,d,c){const T=S.points;let x=0,g=-1;for(let I=0;I<3;I++){const{start:w,end:A}=p;w.copy(T[I]),A.copy(T[(I+1)%3]),p.delta(a);const C=wr(d.distanceToPoint(w));if(wr(d.normal.dot(a))&&C){c.copy(p),x=2;break}const b=d.intersectLine(p,_);if(!b&&C&&_.copy(w),(b||C)&&!wr(_.distanceTo(A))){if(x<=1)(x===1?c.start:c.end).copy(_),C&&(g=x);else if(x>=2){(g===1?c.start:c.end).copy(_),x=2;break}if(x++,x===2&&g===-1)break}}return x}return function(S,d=null,c=!1){this.needsUpdate&&this.update(),S.isExtendedTriangle?S.needsUpdate&&S.update():(n.copy(S),n.update(),S=n);const T=this.plane,x=S.plane;if(Math.abs(T.normal.dot(x.normal))>1-1e-10){const g=this.satBounds,I=this.satAxes;e[0]=S.a,e[1]=S.b,e[2]=S.c;for(let C=0;C<4;C++){const b=g[C],m=I[C];if(i.setFromPoints(m,e),b.isSeparated(i))return!1}const w=S.satBounds,A=S.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let C=0;C<4;C++){const b=w[C],m=A[C];if(i.setFromPoints(m,t),b.isSeparated(i))return!1}for(let C=0;C<4;C++){const b=I[C];for(let m=0;m<4;m++){const y=A[m];if(s.crossVectors(b,y),i.setFromPoints(s,t),r.setFromPoints(s,e),i.isSeparated(r))return!1}}return d&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),d.start.set(0,0,0),d.end.set(0,0,0)),!0}{const g=M(this,x,h);if(g===1&&S.containsPoint(h.end))return d&&(d.start.copy(h.end),d.end.copy(h.end)),!0;if(g!==2)return!1;const I=M(S,T,u);if(I===1&&this.containsPoint(u.end))return d&&(d.start.copy(u.end),d.end.copy(u.end)),!0;if(I!==2)return!1;if(h.delta(o),u.delta(l),o.dot(l)<0){let m=u.start;u.start=u.end,u.end=m}const w=h.start.dot(o),A=h.end.dot(o),C=u.start.dot(o),b=u.end.dot(o);return(w===b||C===A||A<C!=w<b)&&(d&&(f.subVectors(h.start,u.start),f.dot(o)>0?d.start.copy(h.start):d.start.copy(u.start),f.subVectors(h.end,u.end),f.dot(o)<0?d.end.copy(h.end):d.end.copy(u.end)),!0)}}}(),ze.prototype.distanceToPoint=function(){const n=new tt;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}(),ze.prototype.distanceToTriangle=function(){const n=new tt,t=new tt,e=["a","b","c"],i=new Ge,r=new Ge;return function(s,a=null,o=null){const l=a||o?i:null;if(this.intersectsTriangle(s,l))return(a||o)&&(a&&l.getCenter(a),o&&l.getCenter(o)),0;let f=1/0;for(let p=0;p<3;p++){let h;const u=e[p],_=s[u];this.closestPointToPoint(_,n),h=_.distanceToSquared(n),h<f&&(f=h,a&&a.copy(n),o&&o.copy(_));const M=this[u];s.closestPointToPoint(M,n),h=M.distanceToSquared(n),h<f&&(f=h,a&&a.copy(M),o&&o.copy(n))}for(let p=0;p<3;p++){const h=e[p],u=e[(p+1)%3];i.set(this[h],this[u]);for(let _=0;_<3;_++){const M=e[_],S=e[(_+1)%3];r.set(s[M],s[S]),Jr(i,r,n,t);const d=n.distanceToSquared(t);d<f&&(f=d,a&&a.copy(n),o&&o.copy(t))}}return Math.sqrt(f)}}();class ve{constructor(t,e,i){this.isOrientedBox=!0,this.min=new tt,this.max=new tt,this.matrix=new qt,this.invMatrix=new qt,this.points=new Array(8).fill().map(()=>new tt),this.satAxes=new Array(3).fill().map(()=>new tt),this.satBounds=new Array(3).fill().map(()=>new $e),this.alignedSatBounds=new Array(3).fill().map(()=>new $e),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),i&&this.matrix.copy(i)}set(t,e,i){this.min.copy(t),this.max.copy(e),this.matrix.copy(i),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ve.prototype.update=function(){return function(){const n=this.matrix,t=this.min,e=this.max,i=this.points;for(let l=0;l<=1;l++)for(let f=0;f<=1;f++)for(let p=0;p<=1;p++){const h=i[1*l|2*f|4*p];h.x=l?e.x:t.x,h.y=f?e.y:t.y,h.z=p?e.z:t.z,h.applyMatrix4(n)}const r=this.satBounds,s=this.satAxes,a=i[0];for(let l=0;l<3;l++){const f=s[l],p=r[l],h=i[1<<l];f.subVectors(a,h),p.setFromPoints(f,i)}const o=this.alignedSatBounds;o[0].setFromPointsField(i,"x"),o[1].setFromPointsField(i,"y"),o[2].setFromPointsField(i,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}(),ve.prototype.intersectsBox=function(){const n=new $e;return function(t){this.needsUpdate&&this.update();const e=t.min,i=t.max,r=this.satBounds,s=this.satAxes,a=this.alignedSatBounds;if(n.min=e.x,n.max=i.x,a[0].isSeparated(n)||(n.min=e.y,n.max=i.y,a[1].isSeparated(n))||(n.min=e.z,n.max=i.z,a[2].isSeparated(n)))return!1;for(let o=0;o<3;o++){const l=s[o],f=r[o];if(n.setFromBox(l,t),f.isSeparated(n))return!1}return!0}}(),ve.prototype.intersectsTriangle=function(){const n=new ze,t=new Array(3),e=new $e,i=new $e,r=new tt;return function(s){this.needsUpdate&&this.update(),s.isExtendedTriangle?s.needsUpdate&&s.update():(n.copy(s),n.update(),s=n);const a=this.satBounds,o=this.satAxes;t[0]=s.a,t[1]=s.b,t[2]=s.c;for(let h=0;h<3;h++){const u=a[h],_=o[h];if(e.setFromPoints(_,t),u.isSeparated(e))return!1}const l=s.satBounds,f=s.satAxes,p=this.points;for(let h=0;h<3;h++){const u=l[h],_=f[h];if(e.setFromPoints(_,p),u.isSeparated(e))return!1}for(let h=0;h<3;h++){const u=o[h];for(let _=0;_<4;_++){const M=f[_];if(r.crossVectors(u,M),e.setFromPoints(r,t),i.setFromPoints(r,p),e.isSeparated(i))return!1}}return!0}}(),ve.prototype.closestPointToPoint=function(){return function(n,t){return this.needsUpdate&&this.update(),t.copy(n).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}}(),ve.prototype.distanceToPoint=function(){const n=new tt;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}}(),ve.prototype.distanceToBox=function(){const n=["x","y","z"],t=new Array(12).fill().map(()=>new Ge),e=new Array(12).fill().map(()=>new Ge),i=new tt,r=new tt;return function(s,a=0,o=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(s))return(o||l)&&(s.getCenter(r),this.closestPointToPoint(r,i),s.closestPointToPoint(i,r),o&&o.copy(i),l&&l.copy(r)),0;const f=a*a,p=s.min,h=s.max,u=this.points;let _=1/0;for(let S=0;S<8;S++){const d=u[S];r.copy(d).clamp(p,h);const c=d.distanceToSquared(r);if(c<_&&(_=c,o&&o.copy(d),l&&l.copy(r),c<f))return Math.sqrt(c)}let M=0;for(let S=0;S<3;S++)for(let d=0;d<=1;d++)for(let c=0;c<=1;c++){const T=(S+1)%3,x=(S+2)%3,g=1<<S|d<<T|c<<x,I=u[d<<T|c<<x],w=u[g];t[M].set(I,w);const A=n[S],C=n[T],b=n[x],m=e[M],y=m.start,U=m.end;y[A]=p[A],y[C]=d?p[C]:h[C],y[b]=c?p[b]:h[C],U[A]=h[A],U[C]=d?p[C]:h[C],U[b]=c?p[b]:h[C],M++}for(let S=0;S<=1;S++)for(let d=0;d<=1;d++)for(let c=0;c<=1;c++){r.x=S?h.x:p.x,r.y=d?h.y:p.y,r.z=c?h.z:p.z,this.closestPointToPoint(r,i);const T=r.distanceToSquared(i);if(T<_&&(_=T,o&&o.copy(i),l&&l.copy(r),T<f))return Math.sqrt(T)}for(let S=0;S<12;S++){const d=t[S];for(let c=0;c<12;c++){const T=e[c];Jr(d,T,i,r);const x=i.distanceToSquared(r);if(x<_&&(_=x,o&&o.copy(i),l&&l.copy(r),x<f))return Math.sqrt(x)}}return Math.sqrt(_)}}();class _s{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Zp extends _s{constructor(){super(()=>new ze)}}const Ie=new Zp;function Ae(n,t){return t[n+15]===65535}function ye(n,t){return t[n+6]}function Pe(n,t){return t[n+14]}function Ue(n){return n+8}function De(n,t){return t[n+6]}function Pa(n,t){return t[n+7]}const te=new class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const n=[];let t=null;this.setBuffer=e=>{t&&n.push(t),t=e,this.float32Array=new Float32Array(e),this.uint16Array=new Uint16Array(e),this.uint32Array=new Uint32Array(e)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,n.length!==0&&this.setBuffer(n.pop())}}};let nn,Gn;const yn=[],Ii=new _s(()=>new xe);function $p(n,t,e,i,r,s){nn=Ii.getPrimitive(),Gn=Ii.getPrimitive(),yn.push(nn,Gn),te.setBuffer(n._roots[t]);const a=ts(0,n.geometry,e,i,r,s);te.clearBuffer(),Ii.releasePrimitive(nn),Ii.releasePrimitive(Gn),yn.pop(),yn.pop();const o=yn.length;return o>0&&(Gn=yn[o-1],nn=yn[o-2]),a}function ts(n,t,e,i,r=null,s=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:f}=te;let p=2*n;if(Ae(p,l)){const h=ye(n,f),u=Pe(p,l);return ne(n,o,nn),i(h,u,!1,a,s+n,nn)}{let h=function(b){const{uint16Array:m,uint32Array:y}=te;let U=2*b;for(;!Ae(U,m);)U=2*(b=Ue(b));return ye(b,y)},u=function(b){const{uint16Array:m,uint32Array:y}=te;let U=2*b;for(;!Ae(U,m);)U=2*(b=De(b,y));return ye(b,y)+Pe(U,m)};const _=Ue(n),M=De(n,f);let S,d,c,T,x=_,g=M;if(r&&(c=nn,T=Gn,ne(x,o,c),ne(g,o,T),S=r(c),d=r(T),d<S)){x=M,g=_;const b=S;S=d,d=b,c=T}c||(c=nn,ne(x,o,c));const I=e(c,Ae(2*x,l),S,a+1,s+x);let w;if(I===2){const b=h(x);w=i(b,u(x)-b,!0,a+1,s+x,c)}else w=I&&ts(x,t,e,i,r,s,a+1);if(w)return!0;T=Gn,ne(g,o,T);const A=e(T,Ae(2*g,l),d,a+1,s+g);let C;if(A===2){const b=h(g);C=i(b,u(g)-b,!0,a+1,s+g,T)}else C=A&&ts(g,t,e,i,r,s,a+1);return!!C}}const jn=new tt,Rr=new tt,wn=new tt,Rn=new tt,Cn=new tt,Pi=new oe,Ui=new oe,Di=new oe,Vo=new tt,Go=new tt,Ho=new tt,Li=new tt;function jp(n,t,e,i,r,s,a,o,l){wn.fromBufferAttribute(t,s),Rn.fromBufferAttribute(t,a),Cn.fromBufferAttribute(t,o);const f=function(p,h,u,_,M,S){let d;return d=S===we?p.intersectTriangle(_,u,h,!0,M):p.intersectTriangle(h,u,_,S!==ke,M),d===null?null:{distance:p.origin.distanceTo(M),point:M.clone()}}(n,wn,Rn,Cn,Li,l);if(f){i&&(Pi.fromBufferAttribute(i,s),Ui.fromBufferAttribute(i,a),Di.fromBufferAttribute(i,o),f.uv=ii.getInterpolation(Li,wn,Rn,Cn,Pi,Ui,Di,new oe)),r&&(Pi.fromBufferAttribute(r,s),Ui.fromBufferAttribute(r,a),Di.fromBufferAttribute(r,o),f.uv1=ii.getInterpolation(Li,wn,Rn,Cn,Pi,Ui,Di,new oe)),e&&(Vo.fromBufferAttribute(e,s),Go.fromBufferAttribute(e,a),Ho.fromBufferAttribute(e,o),f.normal=ii.getInterpolation(Li,wn,Rn,Cn,Vo,Go,Ho,new tt),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const p={a:s,b:a,c:o,normal:new tt,materialIndex:0};ii.getNormal(wn,Rn,Cn,p.normal),f.face=p,f.faceIndex=s}return f}function ar(n,t,e,i,r){const s=3*i;let a=s+0,o=s+1,l=s+2;const f=n.index;n.index&&(a=f.getX(a),o=f.getX(o),l=f.getX(l));const{position:p,normal:h,uv:u,uv1:_}=n.attributes,M=jp(e,p,h,u,_,a,o,l,t);return M?(M.faceIndex=i,r&&r.push(M),M):null}function fe(n,t,e,i){const r=n.a,s=n.b,a=n.c;let o=t,l=t+1,f=t+2;e&&(o=e.getX(o),l=e.getX(l),f=e.getX(f)),r.x=i.getX(o),r.y=i.getY(o),r.z=i.getZ(o),s.x=i.getX(l),s.y=i.getY(l),s.z=i.getZ(l),a.x=i.getX(f),a.y=i.getY(f),a.z=i.getZ(f)}function Qp(n,t,e,i,r,s,a){const{geometry:o}=e,{index:l}=o,f=o.attributes.position;for(let p=n,h=t+n;p<h;p++){let u;if(u=p,fe(a,3*u,l,f),a.needsUpdate=!0,i(a,u,r,s))return!0}return!1}function Jp(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,f=0;const p=n._roots;for(let u=0,_=p.length;u<_;u++)s=p[u],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),h(0,f),f+=s.byteLength;function h(u,_,M=!1){const S=2*u;if(o[S+15]===or){const d=a[u+6];let c=1/0,T=1/0,x=1/0,g=-1/0,I=-1/0,w=-1/0;for(let A=3*d,C=3*(d+o[S+14]);A<C;A++){let b=i[A];const m=r.getX(b),y=r.getY(b),U=r.getZ(b);m<c&&(c=m),m>g&&(g=m),y<T&&(T=y),y>I&&(I=y),U<x&&(x=U),U>w&&(w=U)}return(l[u+0]!==c||l[u+1]!==T||l[u+2]!==x||l[u+3]!==g||l[u+4]!==I||l[u+5]!==w)&&(l[u+0]=c,l[u+1]=T,l[u+2]=x,l[u+3]=g,l[u+4]=I,l[u+5]=w,!0)}{const d=u+8,c=a[u+6],T=d+_,x=c+_;let g=M,I=!1,w=!1;t?g||(I=t.has(T),w=t.has(x),g=!I&&!w):(I=!0,w=!0);const A=g||w;let C=!1;(g||I)&&(C=h(d,_,g));let b=!1;A&&(b=h(c,_,g));const m=C||b;if(m)for(let y=0;y<3;y++){const U=d+y,D=c+y,B=l[U],q=l[U+3],G=l[D],Y=l[D+3];l[u+y]=B<G?B:G,l[u+y+3]=q>Y?q:Y}return m}}}const zo=new xe;function sn(n,t,e,i){return ne(n,t,zo),e.intersectBox(zo,i)}function t_(n,t,e,i,r,s,a){const{geometry:o}=e,{index:l}=o,f=o.attributes.position;for(let p=n,h=t+n;p<h;p++){let u;if(u=e.resolveTriangleIndex(p),fe(a,3*u,l,f),a.needsUpdate=!0,i(a,u,r,s))return!0}return!1}const ko=new tt;function e_(n,t,e,i,r){te.setBuffer(n._roots[t]),es(0,n,e,i,r),te.clearBuffer()}function es(n,t,e,i,r){const{float32Array:s,uint16Array:a,uint32Array:o}=te,l=2*n;if(Ae(l,a))(function(f,p,h,u,_,M){const{geometry:S,_indirectBuffer:d}=f;for(let c=u,T=u+_;c<T;c++)ar(S,p,h,c,M)})(t,e,i,ye(n,o),Pe(l,a),r);else{const f=Ue(n);sn(f,s,i,ko)&&es(f,t,e,i,r);const p=De(n,o);sn(p,s,i,ko)&&es(p,t,e,i,r)}}const Wo=new tt,n_=["x","y","z"];function i_(n,t,e,i){te.setBuffer(n._roots[t]);const r=ns(0,n,e,i);return te.clearBuffer(),r}function ns(n,t,e,i){const{float32Array:r,uint16Array:s,uint32Array:a}=te;let o=2*n;if(Ae(o,s))return function(l,f,p,h,u){const{geometry:_,_indirectBuffer:M}=l;let S=1/0,d=null;for(let c=h,T=h+u;c<T;c++){let x;x=ar(_,f,p,c),x&&x.distance<S&&(d=x,S=x.distance)}return d}(t,e,i,ye(n,a),Pe(o,s));{const l=Pa(n,a),f=n_[l],p=i.direction[f]>=0;let h,u;p?(h=Ue(n),u=De(n,a)):(h=De(n,a),u=Ue(n));const _=sn(h,r,i,Wo)?ns(h,t,e,i):null;if(_){const S=_.point[f];if(p?S<=r[u+l]:S>=r[u+l+3])return _}const M=sn(u,r,i,Wo)?ns(u,t,e,i):null;return _&&M?_.distance<=M.distance?_:M:_||M||null}}const Ni=new xe,In=new ze,Pn=new ze,Qn=new qt,Xo=new ve,Fi=new ve;function r_(n,t,e,i){te.setBuffer(n._roots[t]);const r=is(0,n,e,i);return te.clearBuffer(),r}function is(n,t,e,i,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=te;let l=2*n;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Xo.set(e.boundingBox.min,e.boundingBox.max,i),r=Xo),!Ae(l,a)){const f=n+8,p=o[n+6];return ne(f,s,Ni),r.intersectsBox(Ni)&&is(f,t,e,i,r)?!0:(ne(p,s,Ni),!!(r.intersectsBox(Ni)&&is(p,t,e,i,r)))}{const f=t.geometry,p=f.index,h=f.attributes.position,u=e.index,_=e.attributes.position,M=ye(n,o),S=Pe(l,a);if(Qn.copy(i).invert(),e.boundsTree)return ne(n,s,Fi),Fi.matrix.copy(Qn),Fi.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:d=>Fi.intersectsBox(d),intersectsTriangle:d=>{d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let c=3*M,T=3*(S+M);c<T;c+=3)if(fe(Pn,c,p,h),Pn.needsUpdate=!0,d.intersectsTriangle(Pn))return!0;return!1}});for(let d=3*M,c=3*(S+M);d<c;d+=3){fe(In,d,p,h),In.a.applyMatrix4(Qn),In.b.applyMatrix4(Qn),In.c.applyMatrix4(Qn),In.needsUpdate=!0;for(let T=0,x=u.count;T<x;T+=3)if(fe(Pn,T,u,_),Pn.needsUpdate=!0,In.intersectsTriangle(Pn))return!0}}}const Oi=new qt,Cr=new ve,Jn=new ve,s_=new tt,o_=new tt,a_=new tt,c_=new tt;function l_(n,t,e,i={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Cr.set(t.boundingBox.min,t.boundingBox.max,e),Cr.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,f=o.index,p=t.attributes.position,h=t.index,u=Ie.getPrimitive(),_=Ie.getPrimitive();let M=s_,S=o_,d=null,c=null;r&&(d=a_,c=c_);let T=1/0,x=null,g=null;return Oi.copy(e).invert(),Jn.matrix.copy(Oi),n.shapecast({boundsTraverseOrder:I=>Cr.distanceToBox(I),intersectsBounds:(I,w,A)=>A<T&&A<a&&(w&&(Jn.min.copy(I.min),Jn.max.copy(I.max),Jn.needsUpdate=!0),!0),intersectsRange:(I,w)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:A=>Jn.distanceToBox(A),intersectsBounds:(A,C,b)=>b<T&&b<a,intersectsRange:(A,C)=>{for(let b=A,m=A+C;b<m;b++){fe(_,3*b,h,p),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let y=I,U=I+w;y<U;y++){fe(u,3*y,f,l),u.needsUpdate=!0;const D=u.distanceToTriangle(_,M,d);if(D<T&&(S.copy(M),c&&c.copy(d),T=D,x=y,g=b),D<s)return!0}}}});for(let A=0,C=Xn(t);A<C;A++){fe(_,3*A,h,p),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let b=I,m=I+w;b<m;b++){fe(u,3*b,f,l),u.needsUpdate=!0;const y=u.distanceToTriangle(_,M,d);if(y<T&&(S.copy(M),c&&c.copy(d),T=y,x=b,g=A),y<s)return!0}}}}),Ie.releasePrimitive(u),Ie.releasePrimitive(_),T===1/0?null:(i.point?i.point.copy(S):i.point=S.clone(),i.distance=T,i.faceIndex=x,r&&(r.point?r.point.copy(c):r.point=c.clone(),r.point.applyMatrix4(Oi),S.applyMatrix4(Oi),r.distance=S.sub(r.point).length(),r.faceIndex=g),i)}function f_(n,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=n.geometry,i=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,f=0;const p=n._roots;for(let u=0,_=p.length;u<_;u++)s=p[u],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),h(0,f),f+=s.byteLength;function h(u,_,M=!1){const S=2*u;if(o[S+15]===or){const d=a[u+6];let c=1/0,T=1/0,x=1/0,g=-1/0,I=-1/0,w=-1/0;for(let A=d,C=d+o[S+14];A<C;A++){const b=3*n.resolveTriangleIndex(A);for(let m=0;m<3;m++){let y=b+m;y=i?i[y]:y;const U=r.getX(y),D=r.getY(y),B=r.getZ(y);U<c&&(c=U),U>g&&(g=U),D<T&&(T=D),D>I&&(I=D),B<x&&(x=B),B>w&&(w=B)}}return(l[u+0]!==c||l[u+1]!==T||l[u+2]!==x||l[u+3]!==g||l[u+4]!==I||l[u+5]!==w)&&(l[u+0]=c,l[u+1]=T,l[u+2]=x,l[u+3]=g,l[u+4]=I,l[u+5]=w,!0)}{const d=u+8,c=a[u+6],T=d+_,x=c+_;let g=M,I=!1,w=!1;t?g||(I=t.has(T),w=t.has(x),g=!I&&!w):(I=!0,w=!0);const A=g||w;let C=!1;(g||I)&&(C=h(d,_,g));let b=!1;A&&(b=h(c,_,g));const m=C||b;if(m)for(let y=0;y<3;y++){const U=d+y,D=c+y,B=l[U],q=l[U+3],G=l[D],Y=l[D+3];l[u+y]=B<G?B:G,l[u+y+3]=q>Y?q:Y}return m}}}const qo=new tt;function d_(n,t,e,i,r){te.setBuffer(n._roots[t]),rs(0,n,e,i,r),te.clearBuffer()}function rs(n,t,e,i,r){const{float32Array:s,uint16Array:a,uint32Array:o}=te,l=2*n;if(Ae(l,a))(function(f,p,h,u,_,M){const{geometry:S,_indirectBuffer:d}=f;for(let c=u,T=u+_;c<T;c++)ar(S,p,h,d?d[c]:c,M)})(t,e,i,ye(n,o),Pe(l,a),r);else{const f=Ue(n);sn(f,s,i,qo)&&rs(f,t,e,i,r);const p=De(n,o);sn(p,s,i,qo)&&rs(p,t,e,i,r)}}const Ko=new tt,u_=["x","y","z"];function h_(n,t,e,i){te.setBuffer(n._roots[t]);const r=ss(0,n,e,i);return te.clearBuffer(),r}function ss(n,t,e,i){const{float32Array:r,uint16Array:s,uint32Array:a}=te;let o=2*n;if(Ae(o,s))return function(l,f,p,h,u){const{geometry:_,_indirectBuffer:M}=l;let S=1/0,d=null;for(let c=h,T=h+u;c<T;c++){let x;x=ar(_,f,p,M?M[c]:c),x&&x.distance<S&&(d=x,S=x.distance)}return d}(t,e,i,ye(n,a),Pe(o,s));{const l=Pa(n,a),f=u_[l],p=i.direction[f]>=0;let h,u;p?(h=Ue(n),u=De(n,a)):(h=De(n,a),u=Ue(n));const _=sn(h,r,i,Ko)?ss(h,t,e,i):null;if(_){const S=_.point[f];if(p?S<=r[u+l]:S>=r[u+l+3])return _}const M=sn(u,r,i,Ko)?ss(u,t,e,i):null;return _&&M?_.distance<=M.distance?_:M:_||M||null}}const Bi=new xe,Un=new ze,Dn=new ze,ti=new qt,Yo=new ve,Vi=new ve;function p_(n,t,e,i){te.setBuffer(n._roots[t]);const r=os(0,n,e,i);return te.clearBuffer(),r}function os(n,t,e,i,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=te;let l=2*n;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Yo.set(e.boundingBox.min,e.boundingBox.max,i),r=Yo),!Ae(l,a)){const f=n+8,p=o[n+6];return ne(f,s,Bi),r.intersectsBox(Bi)&&os(f,t,e,i,r)?!0:(ne(p,s,Bi),!!(r.intersectsBox(Bi)&&os(p,t,e,i,r)))}{const f=t.geometry,p=f.index,h=f.attributes.position,u=e.index,_=e.attributes.position,M=ye(n,o),S=Pe(l,a);if(ti.copy(i).invert(),e.boundsTree)return ne(n,s,Vi),Vi.matrix.copy(ti),Vi.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:d=>Vi.intersectsBox(d),intersectsTriangle:d=>{d.a.applyMatrix4(i),d.b.applyMatrix4(i),d.c.applyMatrix4(i),d.needsUpdate=!0;for(let c=M,T=S+M;c<T;c++)if(fe(Dn,3*t.resolveTriangleIndex(c),p,h),Dn.needsUpdate=!0,d.intersectsTriangle(Dn))return!0;return!1}});for(let d=M,c=S+M;d<c;d++){const T=t.resolveTriangleIndex(d);fe(Un,3*T,p,h),Un.a.applyMatrix4(ti),Un.b.applyMatrix4(ti),Un.c.applyMatrix4(ti),Un.needsUpdate=!0;for(let x=0,g=u.count;x<g;x+=3)if(fe(Dn,x,u,_),Dn.needsUpdate=!0,Un.intersectsTriangle(Dn))return!0}}}const Gi=new qt,Ir=new ve,ei=new ve,__=new tt,m_=new tt,g_=new tt,b_=new tt;function v_(n,t,e,i={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Ir.set(t.boundingBox.min,t.boundingBox.max,e),Ir.needsUpdate=!0;const o=n.geometry,l=o.attributes.position,f=o.index,p=t.attributes.position,h=t.index,u=Ie.getPrimitive(),_=Ie.getPrimitive();let M=__,S=m_,d=null,c=null;r&&(d=g_,c=b_);let T=1/0,x=null,g=null;return Gi.copy(e).invert(),ei.matrix.copy(Gi),n.shapecast({boundsTraverseOrder:I=>Ir.distanceToBox(I),intersectsBounds:(I,w,A)=>A<T&&A<a&&(w&&(ei.min.copy(I.min),ei.max.copy(I.max),ei.needsUpdate=!0),!0),intersectsRange:(I,w)=>{if(t.boundsTree){const A=t.boundsTree;return A.shapecast({boundsTraverseOrder:C=>ei.distanceToBox(C),intersectsBounds:(C,b,m)=>m<T&&m<a,intersectsRange:(C,b)=>{for(let m=C,y=C+b;m<y;m++){const U=A.resolveTriangleIndex(m);fe(_,3*U,h,p),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let D=I,B=I+w;D<B;D++){const q=n.resolveTriangleIndex(D);fe(u,3*q,f,l),u.needsUpdate=!0;const G=u.distanceToTriangle(_,M,d);if(G<T&&(S.copy(M),c&&c.copy(d),T=G,x=D,g=m),G<s)return!0}}}})}for(let A=0,C=Xn(t);A<C;A++){fe(_,3*A,h,p),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let b=I,m=I+w;b<m;b++){const y=n.resolveTriangleIndex(b);fe(u,3*y,f,l),u.needsUpdate=!0;const U=u.distanceToTriangle(_,M,d);if(U<T&&(S.copy(M),c&&c.copy(d),T=U,x=b,g=A),U<s)return!0}}}}),Ie.releasePrimitive(u),Ie.releasePrimitive(_),T===1/0?null:(i.point?i.point.copy(S):i.point=S.clone(),i.distance=T,i.faceIndex=x,r&&(r.point?r.point.copy(c):r.point=c.clone(),r.point.applyMatrix4(Gi),S.applyMatrix4(Gi),r.distance=S.sub(r.point).length(),r.faceIndex=g),i)}const oi=new te.constructor,tr=new te.constructor,tn=new _s(()=>new xe),Ln=new xe,Nn=new xe,Pr=new xe,Ur=new xe;let Dr=!1;function Oe(n,t,e,i,r,s=0,a=0,o=0,l=0,f=null,p=!1){let h,u;p?(h=tr,u=oi):(h=oi,u=tr);const _=h.float32Array,M=h.uint32Array,S=h.uint16Array,d=u.float32Array,c=u.uint32Array,T=u.uint16Array,x=2*t,g=Ae(2*n,S),I=Ae(x,T);let w=!1;if(I&&g)w=p?r(ye(t,c),Pe(2*t,T),ye(n,M),Pe(2*n,S),l,a+t,o,s+n):r(ye(n,M),Pe(2*n,S),ye(t,c),Pe(2*t,T),o,s+n,l,a+t);else if(I){const A=tn.getPrimitive();ne(t,d,A),A.applyMatrix4(e);const C=Ue(n),b=De(n,M);ne(C,_,Ln),ne(b,_,Nn);const m=A.intersectsBox(Ln),y=A.intersectsBox(Nn);w=m&&Oe(t,C,i,e,r,a,s,l,o+1,A,!p)||y&&Oe(t,b,i,e,r,a,s,l,o+1,A,!p),tn.releasePrimitive(A)}else{const A=Ue(t),C=De(t,c);ne(A,d,Pr),ne(C,d,Ur);const b=f.intersectsBox(Pr),m=f.intersectsBox(Ur);if(b&&m)w=Oe(n,A,e,i,r,s,a,o,l+1,f,p)||Oe(n,C,e,i,r,s,a,o,l+1,f,p);else if(b)if(g)w=Oe(n,A,e,i,r,s,a,o,l+1,f,p);else{const y=tn.getPrimitive();y.copy(Pr).applyMatrix4(e);const U=Ue(n),D=De(n,M);ne(U,_,Ln),ne(D,_,Nn);const B=y.intersectsBox(Ln),q=y.intersectsBox(Nn);w=B&&Oe(A,U,i,e,r,a,s,l,o+1,y,!p)||q&&Oe(A,D,i,e,r,a,s,l,o+1,y,!p),tn.releasePrimitive(y)}else if(m)if(g)w=Oe(n,C,e,i,r,s,a,o,l+1,f,p);else{const y=tn.getPrimitive();y.copy(Ur).applyMatrix4(e);const U=Ue(n),D=De(n,M);ne(U,_,Ln),ne(D,_,Nn);const B=y.intersectsBox(Ln),q=y.intersectsBox(Nn);w=B&&Oe(C,U,i,e,r,a,s,l,o+1,y,!p)||q&&Oe(C,D,i,e,r,a,s,l,o+1,y,!p),tn.releasePrimitive(y)}}return w}const Hi=new ve,Zo=new xe;class ms{static serialize(t,e={}){e={cloneBuffers:!0,...e};const i=t.geometry,r=t._roots,s=t._indirectBuffer,a=i.getIndex();let o;return o=e.cloneBuffers?{roots:r.map(l=>l.slice()),index:a.array.slice(),indirectBuffer:s?s.slice():null}:{roots:r,index:a.array,indirectBuffer:s},o}static deserialize(t,e,i={}){i={setIndex:!0,indirect:!!t.indirectBuffer,...i};const{index:r,roots:s,indirectBuffer:a}=t,o=new ms(e,{...i,[Ar]:!0});if(o._roots=s,o._indirectBuffer=a||null,i.setIndex){const l=e.getIndex();if(l===null){const f=new Le(t.index,1,!1);e.setIndex(f)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(!t.isBufferGeometry)throw new Error("MeshBVH: Only BufferGeometries are supported.");if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.");if((e=Object.assign({strategy:0,maxDepth:40,maxLeafTris:10,verbose:!0,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,[Ar]:!1},e)).useSharedArrayBuffer&&typeof SharedArrayBuffer>"u")throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Ar]||(qp(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new xe)));const{_indirectBuffer:i}=this;this.resolveTriangleIndex=e.indirect?r=>i[r]:r=>r}refit(t=null){return(this.indirect?f_:Jp)(this,t)}traverse(t,e=0){const i=this._roots[e],r=new Uint32Array(i),s=new Uint16Array(i);(function a(o,l=0){const f=2*o,p=s[f+15]===or;if(p){const h=r[o+6],u=s[f+14];t(l,p,new Float32Array(i,4*o,6),h,u)}else{const h=o+8,u=r[o+6],_=r[o+7];t(l,p,new Float32Array(i,4*o,6),_)||(a(h,l+1),a(u,l+1))}})(0)}raycast(t,e=vn){const i=this._roots,r=this.geometry,s=[],a=e.isMaterial,o=Array.isArray(e),l=r.groups,f=a?e.side:e,p=this.indirect?d_:e_;for(let h=0,u=i.length;h<u;h++){const _=o?e[l[h].materialIndex].side:f,M=s.length;if(p(this,h,_,t,s),o){const S=l[h].materialIndex;for(let d=M,c=s.length;d<c;d++)s[d].face.materialIndex=S}}return s}raycastFirst(t,e=vn){const i=this._roots,r=this.geometry,s=e.isMaterial,a=Array.isArray(e);let o=null;const l=r.groups,f=s?e.side:e,p=this.indirect?h_:i_;for(let h=0,u=i.length;h<u;h++){const _=p(this,h,a?e[l[h].materialIndex].side:f,t);_!=null&&(o==null||_.distance<o.distance)&&(o=_,a&&(_.face.materialIndex=l[h].materialIndex))}return o}intersectsGeometry(t,e){let i=!1;const r=this._roots,s=this.indirect?p_:r_;for(let a=0,o=r.length;a<o&&(i=s(this,a,t,e),!i);a++);return i}shapecast(t){const e=Ie.getPrimitive(),i=this.indirect?t_:Qp;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const h=a;a=(u,_,M,S,d)=>!!h(u,_,M,S,d)||i(u,_,this,o,M,S,e)}else a||(a=o?(h,u,_,M)=>i(h,u,this,o,_,M,e):(h,u,_)=>_);let l=!1,f=0;const p=this._roots;for(let h=0,u=p.length;h<u;h++){const _=p[h];if(l=$p(this,h,s,a,r,f),l)break;f+=_.byteLength}return Ie.releasePrimitive(e),l}bvhcast(t,e,i){let{intersectsRanges:r,intersectsTriangles:s}=i;const a=Ie.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,f=this.indirect?M=>{const S=this.resolveTriangleIndex(M);fe(a,3*S,o,l)}:M=>{fe(a,3*M,o,l)},p=Ie.getPrimitive(),h=t.geometry.index,u=t.geometry.attributes.position,_=t.indirect?M=>{const S=t.resolveTriangleIndex(M);fe(p,3*S,h,u)}:M=>{fe(p,3*M,h,u)};if(s){const M=(S,d,c,T,x,g,I,w)=>{for(let A=c,C=c+T;A<C;A++){_(A),p.a.applyMatrix4(e),p.b.applyMatrix4(e),p.c.applyMatrix4(e),p.needsUpdate=!0;for(let b=S,m=S+d;b<m;b++)if(f(b),a.needsUpdate=!0,s(a,p,b,A,x,g,I,w))return!0}return!1};if(r){const S=r;r=function(d,c,T,x,g,I,w,A){return!!S(d,c,T,x,g,I,w,A)||M(d,c,T,x,g,I,w,A)}}else r=M}return function(M,S,d,c){if(Dr)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Dr=!0;const T=M._roots,x=S._roots;let g,I=0,w=0;const A=new qt().copy(d).invert();for(let C=0,b=T.length;C<b;C++){oi.setBuffer(T[C]),w=0;const m=tn.getPrimitive();ne(0,oi.float32Array,m),m.applyMatrix4(A);for(let y=0,U=x.length;y<U&&(tr.setBuffer(x[C]),g=Oe(0,0,d,A,c,I,w,0,0,m),tr.clearBuffer(),w+=x[y].length,!g);y++);if(tn.releasePrimitive(m),oi.clearBuffer(),I+=T[C].length,g)break}return Dr=!1,g}(this,t,e,r)}intersectsBox(t,e){return Hi.set(t.min,t.max,e),Hi.needsUpdate=!0,this.shapecast({intersectsBounds:i=>Hi.intersectsBox(i),intersectsTriangle:i=>Hi.intersectsTriangle(i)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,i={},r={},s=0,a=1/0){return(this.indirect?v_:l_)(this,t,e,i,r,s,a)}closestPointToPoint(t,e={},i=0,r=1/0){return function(s,a,o={},l=0,f=1/0){const p=l*l,h=f*f;let u=1/0,_=null;if(s.shapecast({boundsTraverseOrder:S=>(jn.copy(a).clamp(S.min,S.max),jn.distanceToSquared(a)),intersectsBounds:(S,d,c)=>c<u&&c<h,intersectsTriangle:(S,d)=>{S.closestPointToPoint(a,jn);const c=a.distanceToSquared(jn);return c<u&&(Rr.copy(jn),u=c,_=d),c<p}}),u===1/0)return null;const M=Math.sqrt(u);return o.point?o.point.copy(Rr):o.point=Rr.clone(),o.distance=M,o.faceIndex=_,o}(this,t,e,i,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(e=>{ne(0,new Float32Array(e),Zo),t.union(Zo)}),t}}function $o(n,t,e){return n===null?null:(n.point.applyMatrix4(t.matrixWorld),n.distance=n.point.distanceTo(e.ray.origin),n.object=t,n.distance<e.near||n.distance>e.far?null:n)}const Lr=new xl,jo=new qt,x_=We.prototype.raycast;function S_(n,t){if(this.geometry.boundsTree){if(this.material===void 0)return;jo.copy(this.matrixWorld).invert(),Lr.copy(n.ray).applyMatrix4(jo);const e=this.geometry.boundsTree;if(n.firstHitOnly===!0){const i=$o(e.raycastFirst(Lr,this.material),this,n);i&&t.push(i)}else{const i=e.raycast(Lr,this.material);for(let r=0,s=i.length;r<s;r++){const a=$o(i[r],this,n);a&&t.push(a)}}}else x_.call(this,n,t)}function E_(n){return this.boundsTree=new ms(this,n),this.boundsTree}function M_(){this.boundsTree=null}const Ua=class as{static apply(t){as.initialized||(kn.prototype.computeBoundsTree=E_,kn.prototype.disposeBoundsTree=M_,We.prototype.raycast=S_,as.initialized=!0),t.boundsTree||t.computeBoundsTree()}static dispose(t){t&&t.disposeBoundsTree&&t.disposeBoundsTree()}};W(Ua,"initialized",!1);let Qo=Ua,Da=class La{constructor(t,e,i){W(this,"ids",new Set),W(this,"itemToInstances",new Map),W(this,"instanceToItem",new Map),W(this,"hiddenItems",new Set),W(this,"id"),W(this,"mesh"),W(this,"capacity",0),W(this,"capacityOffset",10),W(this,"group"),W(this,"_originalColors",new Map),W(this,"_settingVisibility",!1),this.mesh=new No(t,e,i,this),this.id=this.mesh.uuid,this.capacity=i,this.mesh.count=0,this.mesh.geometry.index.count&&Qo.apply(this.mesh.geometry)}get uniqueVertices(){const t=[],e=this.mesh.geometry.getAttribute("position");if(!e)return t;const i=new Set;for(let r=0;r<e.count;r++){const s=e.getX(r),a=e.getY(r),o=e.getZ(r),l=`${s},${a},${o}`;i.has(l)||(i.add(l),t.push(new tt(s,a,o)))}return t}dispose(t=!0){if(this.clear(),this.group=void 0,this._originalColors.clear(),this.mesh){if(t){for(const e of this.mesh.material)e.dispose();this.mesh.material=[],Qo.dispose(this.mesh.geometry),this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.geometry=null}this.mesh.removeFromParent(),this.mesh.userData={},this.mesh.dispose(),this.mesh.fragment=null,this.mesh=null}}get(t){const e=this.getInstancesIDs(t);if(!e)throw new Error("Item not found!");const i=[],r=[];for(const s of e){const a=new qt;if(this.mesh.getMatrixAt(s,a),i.push(a),this.mesh.instanceColor){const o=new Gt;this.mesh.getColorAt(s,o),r.push(o)}}return{id:t,transforms:i,colors:r.length?r:void 0}}getItemID(t){return this.instanceToItem.get(t)||null}getInstancesIDs(t){return this.itemToInstances.get(t)||null}update(){this.mesh.instanceColor&&(this.mesh.instanceColor.needsUpdate=!0),this.mesh.instanceMatrix.needsUpdate=!0}add(t){var e;let i=0;for(const s of t)i+=s.transforms.length;const r=this.mesh.count+i;if(r>this.capacity){const s=r+this.capacityOffset,a=new No(this.mesh.geometry,this.mesh.material,s,this);a.count=this.mesh.count,this.capacity=s;const o=this.mesh;(e=o.parent)==null||e.add(a),o.removeFromParent(),this.mesh=a;const l=new qt;for(let f=0;f<o.instanceMatrix.count;f++)o.getMatrixAt(f,l),a.setMatrixAt(f,l);if(o.instanceColor){const f=new Gt;for(let p=0;p<o.instanceColor.count;p++)o.getColorAt(p,f),a.setColorAt(p,f)}o.dispose()}for(let s=0;s<t.length;s++){const{transforms:a,colors:o,id:l}=t[s];this.itemToInstances.has(l)||this.itemToInstances.set(l,new Set);const f=this.itemToInstances.get(l);this.ids.add(l);for(let p=0;p<a.length;p++){const h=a[p],u=this.mesh.count;if(this.mesh.setMatrixAt(u,h),o){const _=o[p];this.mesh.setColorAt(u,_)}f.add(u),this.instanceToItem.set(u,l),this.mesh.count++}}this.update()}remove(t){if(this.mesh.count!==0){for(const e of t){const i=this.itemToInstances.get(e);if(i===void 0)throw new Error("Instances not found!");for(const r of i){if(this.mesh.count===0)throw new Error("Error with mesh count!");this.putLast(r),this.instanceToItem.delete(r),this.mesh.count--}this.itemToInstances.delete(e),this.ids.delete(e)}this.update()}}clear(){this.hiddenItems.clear(),this.ids.clear(),this.instanceToItem.clear(),this.itemToInstances.clear(),this.mesh.count=0}setVisibility(t,e=this.ids){if(!this._settingVisibility){if(this._settingVisibility=!0,t)for(const i of e){if(!this.ids.has(i)||!this.hiddenItems.has(i))continue;const r=this.itemToInstances.get(i);if(!r)throw new Error("Instances not found!");for(const s of new Set(r))this.mesh.count++,this.putLast(s);this.hiddenItems.delete(i)}else for(const i of e){if(!this.ids.has(i)||this.hiddenItems.has(i))continue;const r=this.itemToInstances.get(i);if(!r)throw new Error("Instances not found!");for(const s of new Set(r))this.putLast(s),this.mesh.count--;this.hiddenItems.add(i)}this.update(),this._settingVisibility=!1}}setColor(t,e=this.ids,i=!1){if(!this.mesh.instanceColor)throw new Error("This fragment doesn't have color per instance!");for(const r of e){if(!this.ids.has(r))continue;const s=this.itemToInstances.get(r);if(!s)throw new Error("Instances not found!");const a=this._originalColors.has(r);a||this._originalColors.set(r,new Map);const o=this._originalColors.get(r);for(const l of new Set(s)){if(!a){const f=new Gt;this.mesh.getColorAt(l,f),o.set(l,f)}this.mesh.setColorAt(l,t),i&&o.set(l,t)}}this.mesh.instanceColor.needsUpdate=!0}resetColor(t=this.ids){if(!this.mesh.instanceColor)throw new Error("This fragment doesn't have color per instance!");for(const e of t){if(!this.ids.has(e))continue;const i=this.itemToInstances.get(e);if(!i)throw new Error("Instances not found!");const r=this._originalColors.get(e);if(r)for(const s of new Set(i)){const a=r.get(s);if(!a)throw new Error("Original color not found!");this.mesh.setColorAt(s,a)}}this.mesh.instanceColor.needsUpdate=!0}applyTransform(t,e){const i=new qt;for(const r of t){const s=this.getInstancesIDs(r);if(s!==null)for(const a of s)this.mesh.getMatrixAt(a,i),i.premultiply(e),this.mesh.setMatrixAt(a,i)}this.update()}exportData(){return{...this.mesh.exportData(),ids:Array.from(this.ids),id:this.id}}clone(t=this.ids){const e=new La(this.mesh.geometry,this.mesh.material,this.capacity),i=[];for(const r of t){const s=this.getInstancesIDs(r);if(s===null)continue;const a=[],o=[];for(const l of s){const f=new qt,p=new Gt;this.mesh.getMatrixAt(l,f),this.mesh.getColorAt(l,p),a.push(f),o.push(p)}i.push({id:r,transforms:a,colors:o})}return e.add(i),e}putLast(t){if(this.mesh.count===0)return;const e=this.instanceToItem.get(t),i=this.mesh.count-1;if(i===t)return;const r=this.instanceToItem.get(i);if(e===void 0||r===void 0)throw new Error("Keys not found");if(e!==r){const o=this.itemToInstances.get(e),l=this.itemToInstances.get(r);if(!o||!l)throw new Error("Instances not found");if(!o.has(t)||!l.has(i))throw new Error("Malformed fragment structure");o.delete(t),l.delete(i),o.add(i),l.add(t),this.instanceToItem.set(t,r),this.instanceToItem.set(i,e)}const s=new qt,a=new qt;if(this.mesh.getMatrixAt(t,s),this.mesh.getMatrixAt(i,a),this.mesh.setMatrixAt(t,a),this.mesh.setMatrixAt(i,s),this.mesh.instanceColor!==null){const o=new Gt,l=new Gt;this.mesh.getColorAt(t,o),this.mesh.getColorAt(i,l),this.mesh.setColorAt(t,l),this.mesh.setColorAt(i,o);const f=this._originalColors.get(e);if(f){const h=f.get(t);h&&(f.delete(t),f.set(i,h))}const p=this._originalColors.get(r);if(p){const h=p.get(i);h&&(p.delete(i),p.set(t,h))}}}},Yi=class dn{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsCivilCurve(t,e){return(e||new dn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCivilCurve(t,e){return t.setPosition(t.position()+4),(e||new dn).__init(t.readInt32(t.position())+t.position(),t)}points(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}pointsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}pointsArray(){const t=this.bb.__offset(this.bb_pos,4);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startCivilCurve(t){t.startObject(2)}static addPoints(t,e){t.addFieldOffset(0,e,0)}static createPointsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startPointsVector(t,e){t.startVector(4,e,4)}static addData(t,e){t.addFieldOffset(1,e,0)}static endCivilCurve(t){return t.endObject()}static createCivilCurve(t,e,i){return dn.startCivilCurve(t),dn.addPoints(t,e),dn.addData(t,i),dn.endCivilCurve(t)}},Na=class Ke{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsAlignment(t,e){return(e||new Ke).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsAlignment(t,e){return t.setPosition(t.position()+4),(e||new Ke).__init(t.readInt32(t.position())+t.position(),t)}vertical(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new Yi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}verticalLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}horizontal(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Yi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}horizontalLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}absolute(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Yi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}absoluteLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}initialPk(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readFloat32(this.bb_pos+t):0}static startAlignment(t){t.startObject(4)}static addVertical(t,e){t.addFieldOffset(0,e,0)}static createVerticalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startVerticalVector(t,e){t.startVector(4,e,4)}static addHorizontal(t,e){t.addFieldOffset(1,e,0)}static createHorizontalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startHorizontalVector(t,e){t.startVector(4,e,4)}static addAbsolute(t,e){t.addFieldOffset(2,e,0)}static createAbsoluteVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startAbsoluteVector(t,e){t.startVector(4,e,4)}static addInitialPk(t,e){t.addFieldFloat32(3,e,0)}static endAlignment(t){return t.endObject()}static createAlignment(t,e,i,r,s){return Ke.startAlignment(t),Ke.addVertical(t,e),Ke.addHorizontal(t,i),Ke.addAbsolute(t,r),Ke.addInitialPk(t,s),Ke.endAlignment(t)}},Fa=class un{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsCivilData(t,e){return(e||new un).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCivilData(t,e){return t.setPosition(t.position()+4),(e||new un).__init(t.readInt32(t.position())+t.position(),t)}alignments(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new Na).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}alignmentsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrix(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}coordinationMatrixLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrixArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startCivilData(t){t.startObject(2)}static addAlignments(t,e){t.addFieldOffset(0,e,0)}static createAlignmentsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startAlignmentsVector(t,e){t.startVector(4,e,4)}static addCoordinationMatrix(t,e){t.addFieldOffset(1,e,0)}static createCoordinationMatrixVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startCoordinationMatrixVector(t,e){t.startVector(4,e,4)}static endCivilData(t){return t.endObject()}static createCivilData(t,e,i){return un.startCivilData(t),un.addAlignments(t,e),un.addCoordinationMatrix(t,i),un.endCivilData(t)}},cs=class _e{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFragment(t,e){return(e||new _e).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFragment(t,e){return t.setPosition(t.position()+4),(e||new _e).__init(t.readInt32(t.position())+t.position(),t)}position(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}positionLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}positionArray(){const t=this.bb.__offset(this.bb_pos,4);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}normal(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}normalLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}normalArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}index(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}indexLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}indexArray(){const t=this.bb.__offset(this.bb_pos,8);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}groups(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}groupsLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}groupsArray(){const t=this.bb.__offset(this.bb_pos,10);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}materials(t){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}materialsLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}materialsArray(){const t=this.bb.__offset(this.bb_pos,12);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}matrices(t){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}matricesLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}matricesArray(){const t=this.bb.__offset(this.bb_pos,14);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}colors(t){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}colorsLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}colorsArray(){const t=this.bb.__offset(this.bb_pos,16);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsSize(t){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsSizeLength(){const t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsSizeArray(){const t=this.bb.__offset(this.bb_pos,18);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}ids(t){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}idsLength(){const t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__vector_len(this.bb_pos+t):0}idsArray(){const t=this.bb.__offset(this.bb_pos,20);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}id(t){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__string(this.bb_pos+e,t):null}capacity(){const t=this.bb.__offset(this.bb_pos,24);return t?this.bb.readUint32(this.bb_pos+t):0}capacityOffset(){const t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readUint32(this.bb_pos+t):0}static startFragment(t){t.startObject(12)}static addPosition(t,e){t.addFieldOffset(0,e,0)}static createPositionVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startPositionVector(t,e){t.startVector(4,e,4)}static addNormal(t,e){t.addFieldOffset(1,e,0)}static createNormalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startNormalVector(t,e){t.startVector(4,e,4)}static addIndex(t,e){t.addFieldOffset(2,e,0)}static createIndexVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIndexVector(t,e){t.startVector(4,e,4)}static addGroups(t,e){t.addFieldOffset(3,e,0)}static createGroupsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startGroupsVector(t,e){t.startVector(4,e,4)}static addMaterials(t,e){t.addFieldOffset(4,e,0)}static createMaterialsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startMaterialsVector(t,e){t.startVector(4,e,4)}static addMatrices(t,e){t.addFieldOffset(5,e,0)}static createMatricesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startMatricesVector(t,e){t.startVector(4,e,4)}static addColors(t,e){t.addFieldOffset(6,e,0)}static createColorsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startColorsVector(t,e){t.startVector(4,e,4)}static addItemsSize(t,e){t.addFieldOffset(7,e,0)}static createItemsSizeVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsSizeVector(t,e){t.startVector(4,e,4)}static addIds(t,e){t.addFieldOffset(8,e,0)}static createIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIdsVector(t,e){t.startVector(4,e,4)}static addId(t,e){t.addFieldOffset(9,e,0)}static addCapacity(t,e){t.addFieldInt32(10,e,0)}static addCapacityOffset(t,e){t.addFieldInt32(11,e,0)}static endFragment(t){return t.endObject()}static createFragment(t,e,i,r,s,a,o,l,f,p,h,u,_){return _e.startFragment(t),_e.addPosition(t,e),_e.addNormal(t,i),_e.addIndex(t,r),_e.addGroups(t,s),_e.addMaterials(t,a),_e.addMatrices(t,o),_e.addColors(t,l),_e.addItemsSize(t,f),_e.addIds(t,p),_e.addId(t,h),_e.addCapacity(t,u),_e.addCapacityOffset(t,_),_e.endFragment(t)}},Nr=class ls{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFragmentsGroup(t,e){return(e||new ls).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFragmentsGroup(t,e){return t.setPosition(t.position()+4),(e||new ls).__init(t.readInt32(t.position())+t.position(),t)}items(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new cs).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}itemsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}civil(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Fa).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}coordinationMatrix(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}coordinationMatrixLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrixArray(){const t=this.bb.__offset(this.bb_pos,8);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}ids(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}idsLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}idsArray(){const t=this.bb.__offset(this.bb_pos,10);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsKeys(t){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsKeysLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsKeysArray(){const t=this.bb.__offset(this.bb_pos,12);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsKeysIndices(t){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsKeysIndicesLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsKeysIndicesArray(){const t=this.bb.__offset(this.bb_pos,14);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsRels(t){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsRelsLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsRelsArray(){const t=this.bb.__offset(this.bb_pos,16);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsRelsIndices(t){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsRelsIndicesLength(){const t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsRelsIndicesArray(){const t=this.bb.__offset(this.bb_pos,18);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}fragmentKeys(t){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__string(this.bb_pos+e,t):null}id(t){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__string(this.bb_pos+e,t):null}name(t){const e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__string(this.bb_pos+e,t):null}ifcName(t){const e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__string(this.bb_pos+e,t):null}ifcDescription(t){const e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__string(this.bb_pos+e,t):null}ifcSchema(t){const e=this.bb.__offset(this.bb_pos,30);return e?this.bb.__string(this.bb_pos+e,t):null}maxExpressId(){const t=this.bb.__offset(this.bb_pos,32);return t?this.bb.readUint32(this.bb_pos+t):0}boundingBox(t){const e=this.bb.__offset(this.bb_pos,34);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}boundingBoxLength(){const t=this.bb.__offset(this.bb_pos,34);return t?this.bb.__vector_len(this.bb_pos+t):0}boundingBoxArray(){const t=this.bb.__offset(this.bb_pos,34);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}opaqueGeometriesIds(t){const e=this.bb.__offset(this.bb_pos,36);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+4*t):0}opaqueGeometriesIdsLength(){const t=this.bb.__offset(this.bb_pos,36);return t?this.bb.__vector_len(this.bb_pos+t):0}opaqueGeometriesIdsArray(){const t=this.bb.__offset(this.bb_pos,36);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}transparentGeometriesIds(t){const e=this.bb.__offset(this.bb_pos,38);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+4*t):0}transparentGeometriesIdsLength(){const t=this.bb.__offset(this.bb_pos,38);return t?this.bb.__vector_len(this.bb_pos+t):0}transparentGeometriesIdsArray(){const t=this.bb.__offset(this.bb_pos,38);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startFragmentsGroup(t){t.startObject(18)}static addItems(t,e){t.addFieldOffset(0,e,0)}static createItemsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startItemsVector(t,e){t.startVector(4,e,4)}static addCivil(t,e){t.addFieldOffset(1,e,0)}static addCoordinationMatrix(t,e){t.addFieldOffset(2,e,0)}static createCoordinationMatrixVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startCoordinationMatrixVector(t,e){t.startVector(4,e,4)}static addIds(t,e){t.addFieldOffset(3,e,0)}static createIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIdsVector(t,e){t.startVector(4,e,4)}static addItemsKeys(t,e){t.addFieldOffset(4,e,0)}static createItemsKeysVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsKeysVector(t,e){t.startVector(4,e,4)}static addItemsKeysIndices(t,e){t.addFieldOffset(5,e,0)}static createItemsKeysIndicesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsKeysIndicesVector(t,e){t.startVector(4,e,4)}static addItemsRels(t,e){t.addFieldOffset(6,e,0)}static createItemsRelsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsRelsVector(t,e){t.startVector(4,e,4)}static addItemsRelsIndices(t,e){t.addFieldOffset(7,e,0)}static createItemsRelsIndicesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsRelsIndicesVector(t,e){t.startVector(4,e,4)}static addFragmentKeys(t,e){t.addFieldOffset(8,e,0)}static addId(t,e){t.addFieldOffset(9,e,0)}static addName(t,e){t.addFieldOffset(10,e,0)}static addIfcName(t,e){t.addFieldOffset(11,e,0)}static addIfcDescription(t,e){t.addFieldOffset(12,e,0)}static addIfcSchema(t,e){t.addFieldOffset(13,e,0)}static addMaxExpressId(t,e){t.addFieldInt32(14,e,0)}static addBoundingBox(t,e){t.addFieldOffset(15,e,0)}static createBoundingBoxVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startBoundingBoxVector(t,e){t.startVector(4,e,4)}static addOpaqueGeometriesIds(t,e){t.addFieldOffset(16,e,0)}static createOpaqueGeometriesIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startOpaqueGeometriesIdsVector(t,e){t.startVector(4,e,4)}static addTransparentGeometriesIds(t,e){t.addFieldOffset(17,e,0)}static createTransparentGeometriesIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTransparentGeometriesIdsVector(t,e){t.startVector(4,e,4)}static endFragmentsGroup(t){return t.endObject()}static finishFragmentsGroupBuffer(t,e){t.finish(e)}static finishSizePrefixedFragmentsGroupBuffer(t,e){t.finish(e,void 0,!0)}};class T_{constructor(){W(this,"version",1),W(this,"fragmentIDSeparator","|")}import(t){const e=new Sn(t),i=Nr.getRootAsFragmentsGroup(e),r=this.constructFragmentGroup(i),s=i.itemsLength();for(let a=0;a<s;a++){const o=i.items(a);if(!o)continue;const l=this.constructGeometry(o),f=this.constructMaterials(o),p=o.capacity(),h=new Da(l,f,p);h.capacityOffset=o.capacityOffset(),this.setInstances(o,h),this.setID(o,h),r.items.push(h),r.add(h.mesh)}return r}export(t){const e=new pi(1024),i=[],r=Nr,s=cs;let a=null;if(t.civilData){const ft=[],at=Na,dt=Fa;for(const[et,J]of t.civilData.alignments){const{absolute:rt,horizontal:st,vertical:ct}=J,Ct=this.saveCivilCurves(st,e),Nt=this.saveCivilCurves(ct,e),Rt=this.saveCivilCurves(rt,e),P=at.createHorizontalVector(e,Ct),jt=at.createVerticalVector(e,Nt),It=at.createAbsoluteVector(e,Rt);at.startAlignment(e),at.addHorizontal(e,P),at.addVertical(e,jt),at.addAbsolute(e,It),at.addInitialPk(e,J.initialKP);const Ft=at.endAlignment(e);ft.push(Ft)}const O=dt.createAlignmentsVector(e,ft),Z=dt.createCoordinationMatrixVector(e,t.coordinationMatrix.elements);dt.startCivilData(e),dt.addAlignments(e,O),dt.addCoordinationMatrix(e,Z),a=dt.endCivilData(e)}for(const ft of t.items){const at=ft.exportData(),dt=[];for(const jt of ft.ids){const It=ft.getInstancesIDs(jt);if(!It)throw new Error("Instances not found!");dt.push(It.size)}const O=s.createPositionVector(e,at.position),Z=s.createNormalVector(e,at.normal),et=s.createIndexVector(e,at.index),J=s.createGroupsVector(e,at.groups),rt=s.createMaterialsVector(e,at.materials),st=s.createMatricesVector(e,at.matrices),ct=s.createColorsVector(e,at.colors),Ct=s.createIdsVector(e,at.ids),Nt=s.createItemsSizeVector(e,dt),Rt=e.createString(at.id);s.startFragment(e),s.addPosition(e,O),s.addNormal(e,Z),s.addIndex(e,et),s.addGroups(e,J),s.addMaterials(e,rt),s.addMatrices(e,st),s.addColors(e,ct),s.addIds(e,Ct),s.addItemsSize(e,Nt),s.addId(e,Rt),s.addCapacity(e,ft.capacity),s.addCapacityOffset(e,ft.capacityOffset);const P=cs.endFragment(e);i.push(P)}const o=r.createItemsVector(e,i),l=r.createCoordinationMatrixVector(e,t.coordinationMatrix.elements);let f="";for(const ft of t.keyFragments.values())f.length&&(f+=this.fragmentIDSeparator),f+=ft;const p=e.createString(f),h=[],u=[],_=[],M=[],S=[];let d=0,c=0;for(const[ft,[at,dt]]of t.data){h.push(d),_.push(c),S.push(ft);for(const O of at)u.push(O);for(const O of dt)M.push(O);d+=at.length,c+=dt.length}const T=[],x=[];for(const[ft,at]of t.geometryIDs.opaque)T.push(ft,at);for(const[ft,at]of t.geometryIDs.transparent)x.push(ft,at);const g=e.createString(t.uuid),I=e.createString(t.name),w=e.createString(t.ifcMetadata.name),A=e.createString(t.ifcMetadata.description),C=e.createString(t.ifcMetadata.schema),b=r.createItemsKeysIndicesVector(e,h),m=r.createItemsKeysVector(e,u),y=r.createItemsRelsIndicesVector(e,_),U=r.createItemsRelsVector(e,M),D=r.createIdsVector(e,S),B=r.createOpaqueGeometriesIdsVector(e,T),q=r.createTransparentGeometriesIdsVector(e,x),{min:G,max:Y}=t.boundingBox,k=[G.x,G.y,G.z,Y.x,Y.y,Y.z],lt=r.createBoundingBoxVector(e,k);r.startFragmentsGroup(e),r.addId(e,g),r.addName(e,I),r.addIfcName(e,w),r.addIfcDescription(e,A),r.addIfcSchema(e,C),r.addMaxExpressId(e,t.ifcMetadata.maxExpressID),r.addItems(e,o),r.addFragmentKeys(e,p),r.addIds(e,D),r.addItemsKeysIndices(e,b),r.addItemsKeys(e,m),r.addItemsRelsIndices(e,y),r.addItemsRels(e,U),r.addCoordinationMatrix(e,l),r.addBoundingBox(e,lt),r.addOpaqueGeometriesIds(e,B),r.addTransparentGeometriesIds(e,q),a!==null&&r.addCivil(e,a);const ht=Nr.endFragmentsGroup(e);return e.finish(ht),e.asUint8Array()}setID(t,e){const i=t.id();i&&(e.id=i,e.mesh.uuid=i)}setInstances(t,e){const i=t.matricesArray(),r=t.colorsArray(),s=t.idsArray(),a=t.itemsSizeArray();if(!i||!s||!a)throw new Error("Error: Can't load empty fragment!");const o=[];let l=0;for(let f=0;f<a.length;f++){const p=s[f],h=a[f],u=[],_=[];for(let S=0;S<h;S++){const d=16*l,c=i.subarray(d,d+17),T=new qt().fromArray(c);if(u.push(T),r){const x=3*l,[g,I,w]=r.subarray(x,x+4),A=new Gt(g,I,w);_.push(A)}l++}const M=_.length?_:void 0;o.push({id:p,transforms:u,colors:M})}e.add(o)}constructMaterials(t){const e=t.materialsArray(),i=[];if(!e)return i;for(let r=0;r<e.length;r+=5){const s=e[r],a=!!e[r+1],o=e[r+2],l=e[r+3],f=e[r+4],p=new Gt(o,l,f),h=new ma({color:p,opacity:s,transparent:a});i.push(h)}return i}constructFragmentGroup(t){const e=new Oa,i=t.civil();if(i){const A=i.coordinationMatrixArray(),C=new qt;A&&C.fromArray(A),e.civilData={alignments:new Map,coordinationMatrix:C};const b=i.alignmentsLength();for(let m=0;m<b;m++){const y=new ga({color:16777215}),U=new Ba,D=i.alignments(m);if(!D)throw new Error("Alignment not found!");const B=D.horizontalLength();U.horizontal=this.constructCivilCurves(D,U,"horizontal",B,y);const q=D.verticalLength();U.vertical=this.constructCivilCurves(D,U,"vertical",q,y);const G=D.horizontalLength();U.absolute=this.constructCivilCurves(D,U,"absolute",G,y),U.initialKP=D.initialPk(),e.civilData.alignments.set(m,U)}}e.uuid=t.id()||e.uuid,e.name=t.name()||"",e.ifcMetadata={name:t.ifcName()||"",description:t.ifcDescription()||"",schema:t.ifcSchema()||"IFC2X3",maxExpressID:t.maxExpressId()||0};const r=new qt().elements,s=t.coordinationMatrixArray()||r,a=t.idsArray()||new Uint32Array,o=t.itemsKeysIndicesArray()||new Uint32Array,l=t.itemsKeysArray()||new Uint32Array,f=t.itemsRelsArray()||new Uint32Array,p=t.itemsRelsIndicesArray()||new Uint32Array,h=(t.fragmentKeys()||"").split(this.fragmentIDSeparator);this.setGroupData(e,a,o,l,0),this.setGroupData(e,a,p,f,1);const u=t.opaqueGeometriesIdsArray()||new Uint32Array,_=t.transparentGeometriesIdsArray()||new Uint32Array,M=new Map;for(let A=0;A<u.length-1;A+=2){const C=u[A],b=u[A+1];M.set(C,b)}const S=new Map;for(let A=0;A<_.length-1;A+=2){const C=_[A],b=_[A+1];S.set(C,b)}e.geometryIDs={opaque:M,transparent:S};const d=t.boundingBoxArray()||[0,0,0,0,0,0],[c,T,x,g,I,w]=d;e.boundingBox.min.set(c,T,x),e.boundingBox.max.set(g,I,w);for(let A=0;A<h.length;A++)e.keyFragments.set(A,h[A]);return s.length===16&&e.coordinationMatrix.fromArray(s),e}setGroupData(t,e,i,r,s){for(let a=0;a<i.length;a++){const o=e[a],l=i[a],f=i[a+1]||r.length,p=[];for(let u=l;u<f;u++)p.push(r[u]);t.data.has(o)||t.data.set(o,[[],[]]);const h=t.data.get(o);h&&(h[s]=p)}}constructGeometry(t){const e=t.positionArray()||new Float32Array,i=t.normalArray()||new Float32Array,r=t.indexArray(),s=t.groupsArray();if(!r)throw new Error("Index not found!");const a=new kn;if(a.setIndex(Array.from(r)),a.setAttribute("position",new Le(e,3)),a.setAttribute("normal",new Le(i,3)),s)for(let o=0;o<s.length;o+=3){const l=s[o],f=s[o+1],p=s[o+2];a.addGroup(l,f,p)}return a}constructCivilCurves(t,e,i,r,s){const a=[];for(let o=0;o<r;o++){const l=t[i](o);if(!l)throw new Error("Curve not found!");const f=l.pointsArray();if(f===null)throw new Error("Curve points not found!");let p={};const h=l.data();h&&(p=JSON.parse(h));const u=new ba,_=new Le(f,3);u.setAttribute("position",_);const M=[];for(let d=0;d<f.length/3-1;d++)M.push(d,d+1);u.setIndex(M);const S=new Va(o,p,e,u,s);a.push(S.curve)}return a}saveCivilCurves(t,e){const i=Yi,r=[];for(const s of t){const a=s.mesh.geometry.attributes.position.array,o=i.createPointsVector(e,a),l=e.createString(JSON.stringify(s.data));i.startCivilCurve(e),i.addPoints(e,o),i.addData(e,l);const f=i.endCivilCurve(e);r.push(f)}return r}}let Zi=class hn{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsCivilCurve(t,e){return(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCivilCurve(t,e){return t.setPosition(t.position()+4),(e||new hn).__init(t.readInt32(t.position())+t.position(),t)}points(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}pointsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}pointsArray(){const t=this.bb.__offset(this.bb_pos,4);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}data(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.__string(this.bb_pos+e,t):null}static startCivilCurve(t){t.startObject(2)}static addPoints(t,e){t.addFieldOffset(0,e,0)}static createPointsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startPointsVector(t,e){t.startVector(4,e,4)}static addData(t,e){t.addFieldOffset(1,e,0)}static endCivilCurve(t){return t.endObject()}static createCivilCurve(t,e,i){return hn.startCivilCurve(t),hn.addPoints(t,e),hn.addData(t,i),hn.endCivilCurve(t)}};class Be{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsAlignment(t,e){return(e||new Be).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsAlignment(t,e){return t.setPosition(t.position()+4),(e||new Be).__init(t.readInt32(t.position())+t.position(),t)}vertical(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new Zi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}verticalLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}horizontal(t,e){const i=this.bb.__offset(this.bb_pos,6);return i?(e||new Zi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}horizontalLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}absolute(t,e){const i=this.bb.__offset(this.bb_pos,8);return i?(e||new Zi).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}absoluteLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}initialPk(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.readFloat32(this.bb_pos+t):0}static startAlignment(t){t.startObject(4)}static addVertical(t,e){t.addFieldOffset(0,e,0)}static createVerticalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startVerticalVector(t,e){t.startVector(4,e,4)}static addHorizontal(t,e){t.addFieldOffset(1,e,0)}static createHorizontalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startHorizontalVector(t,e){t.startVector(4,e,4)}static addAbsolute(t,e){t.addFieldOffset(2,e,0)}static createAbsoluteVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startAbsoluteVector(t,e){t.startVector(4,e,4)}static addInitialPk(t,e){t.addFieldFloat32(3,e,0)}static endAlignment(t){return t.endObject()}static createAlignment(t,e,i,r,s){return Be.startAlignment(t),Be.addVertical(t,e),Be.addHorizontal(t,i),Be.addAbsolute(t,r),Be.addInitialPk(t,s),Be.endAlignment(t)}}class Ye{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsCivilData(t,e){return(e||new Ye).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsCivilData(t,e){return t.setPosition(t.position()+4),(e||new Ye).__init(t.readInt32(t.position())+t.position(),t)}alignments(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new Be).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}alignmentsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrix(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}coordinationMatrixLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrixArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startCivilData(t){t.startObject(2)}static addAlignments(t,e){t.addFieldOffset(0,e,0)}static createAlignmentsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startAlignmentsVector(t,e){t.startVector(4,e,4)}static addCoordinationMatrix(t,e){t.addFieldOffset(1,e,0)}static createCoordinationMatrixVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startCoordinationMatrixVector(t,e){t.startVector(4,e,4)}static endCivilData(t){return t.endObject()}static createCivilData(t,e,i){return Ye.startCivilData(t),Ye.addAlignments(t,e),Ye.addCoordinationMatrix(t,i),Ye.endCivilData(t)}}class ce{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFragment(t,e){return(e||new ce).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFragment(t,e){return t.setPosition(t.position()+4),(e||new ce).__init(t.readInt32(t.position())+t.position(),t)}position(t){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}positionLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}positionArray(){const t=this.bb.__offset(this.bb_pos,4);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}normal(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}normalLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}normalArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}index(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}indexLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}indexArray(){const t=this.bb.__offset(this.bb_pos,8);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}groups(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}groupsLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}groupsArray(){const t=this.bb.__offset(this.bb_pos,10);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}materials(t){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}materialsLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}materialsArray(){const t=this.bb.__offset(this.bb_pos,12);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}matrices(t){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}matricesLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}matricesArray(){const t=this.bb.__offset(this.bb_pos,14);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}colors(t){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}colorsLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}colorsArray(){const t=this.bb.__offset(this.bb_pos,16);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsSize(t){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsSizeLength(){const t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsSizeArray(){const t=this.bb.__offset(this.bb_pos,18);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}ids(t){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}idsLength(){const t=this.bb.__offset(this.bb_pos,20);return t?this.bb.__vector_len(this.bb_pos+t):0}idsArray(){const t=this.bb.__offset(this.bb_pos,20);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}id(t){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__string(this.bb_pos+e,t):null}capacity(){const t=this.bb.__offset(this.bb_pos,24);return t?this.bb.readUint32(this.bb_pos+t):0}capacityOffset(){const t=this.bb.__offset(this.bb_pos,26);return t?this.bb.readUint32(this.bb_pos+t):0}static startFragment(t){t.startObject(12)}static addPosition(t,e){t.addFieldOffset(0,e,0)}static createPositionVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startPositionVector(t,e){t.startVector(4,e,4)}static addNormal(t,e){t.addFieldOffset(1,e,0)}static createNormalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startNormalVector(t,e){t.startVector(4,e,4)}static addIndex(t,e){t.addFieldOffset(2,e,0)}static createIndexVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIndexVector(t,e){t.startVector(4,e,4)}static addGroups(t,e){t.addFieldOffset(3,e,0)}static createGroupsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startGroupsVector(t,e){t.startVector(4,e,4)}static addMaterials(t,e){t.addFieldOffset(4,e,0)}static createMaterialsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startMaterialsVector(t,e){t.startVector(4,e,4)}static addMatrices(t,e){t.addFieldOffset(5,e,0)}static createMatricesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startMatricesVector(t,e){t.startVector(4,e,4)}static addColors(t,e){t.addFieldOffset(6,e,0)}static createColorsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startColorsVector(t,e){t.startVector(4,e,4)}static addItemsSize(t,e){t.addFieldOffset(7,e,0)}static createItemsSizeVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsSizeVector(t,e){t.startVector(4,e,4)}static addIds(t,e){t.addFieldOffset(8,e,0)}static createIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIdsVector(t,e){t.startVector(4,e,4)}static addId(t,e){t.addFieldOffset(9,e,0)}static addCapacity(t,e){t.addFieldInt32(10,e,0)}static addCapacityOffset(t,e){t.addFieldInt32(11,e,0)}static endFragment(t){return t.endObject()}static createFragment(t,e,i,r,s,a,o,l,f,p,h,u,_){return ce.startFragment(t),ce.addPosition(t,e),ce.addNormal(t,i),ce.addIndex(t,r),ce.addGroups(t,s),ce.addMaterials(t,a),ce.addMatrices(t,o),ce.addColors(t,l),ce.addItemsSize(t,f),ce.addIds(t,p),ce.addId(t,h),ce.addCapacity(t,u),ce.addCapacityOffset(t,_),ce.endFragment(t)}}let Fr=class fs{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsFragmentsGroup(t,e){return(e||new fs).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsFragmentsGroup(t,e){return t.setPosition(t.position()+4),(e||new fs).__init(t.readInt32(t.position())+t.position(),t)}items(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new ce).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}itemsLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}civil(t){const e=this.bb.__offset(this.bb_pos,6);return e?(t||new Ye).__init(this.bb.__indirect(this.bb_pos+e),this.bb):null}coordinationMatrix(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}coordinationMatrixLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}coordinationMatrixArray(){const t=this.bb.__offset(this.bb_pos,8);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}ids(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}idsLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}idsArray(){const t=this.bb.__offset(this.bb_pos,10);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsKeys(t){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsKeysLength(){const t=this.bb.__offset(this.bb_pos,12);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsKeysArray(){const t=this.bb.__offset(this.bb_pos,12);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsKeysIndices(t){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsKeysIndicesLength(){const t=this.bb.__offset(this.bb_pos,14);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsKeysIndicesArray(){const t=this.bb.__offset(this.bb_pos,14);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsRels(t){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsRelsLength(){const t=this.bb.__offset(this.bb_pos,16);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsRelsArray(){const t=this.bb.__offset(this.bb_pos,16);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}itemsRelsIndices(t){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}itemsRelsIndicesLength(){const t=this.bb.__offset(this.bb_pos,18);return t?this.bb.__vector_len(this.bb_pos+t):0}itemsRelsIndicesArray(){const t=this.bb.__offset(this.bb_pos,18);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}fragmentKeys(t){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.__string(this.bb_pos+e,t):null}globalIds(t){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.__string(this.bb_pos+e,t):null}id(t){const e=this.bb.__offset(this.bb_pos,24);return e?this.bb.__string(this.bb_pos+e,t):null}name(t){const e=this.bb.__offset(this.bb_pos,26);return e?this.bb.__string(this.bb_pos+e,t):null}ifcName(t){const e=this.bb.__offset(this.bb_pos,28);return e?this.bb.__string(this.bb_pos+e,t):null}ifcDescription(t){const e=this.bb.__offset(this.bb_pos,30);return e?this.bb.__string(this.bb_pos+e,t):null}ifcSchema(t){const e=this.bb.__offset(this.bb_pos,32);return e?this.bb.__string(this.bb_pos+e,t):null}maxExpressId(){const t=this.bb.__offset(this.bb_pos,34);return t?this.bb.readUint32(this.bb_pos+t):0}boundingBox(t){const e=this.bb.__offset(this.bb_pos,36);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}boundingBoxLength(){const t=this.bb.__offset(this.bb_pos,36);return t?this.bb.__vector_len(this.bb_pos+t):0}boundingBoxArray(){const t=this.bb.__offset(this.bb_pos,36);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}opaqueGeometriesIds(t){const e=this.bb.__offset(this.bb_pos,38);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+4*t):0}opaqueGeometriesIdsLength(){const t=this.bb.__offset(this.bb_pos,38);return t?this.bb.__vector_len(this.bb_pos+t):0}opaqueGeometriesIdsArray(){const t=this.bb.__offset(this.bb_pos,38);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}transparentGeometriesIds(t){const e=this.bb.__offset(this.bb_pos,40);return e?this.bb.readInt32(this.bb.__vector(this.bb_pos+e)+4*t):0}transparentGeometriesIdsLength(){const t=this.bb.__offset(this.bb_pos,40);return t?this.bb.__vector_len(this.bb_pos+t):0}transparentGeometriesIdsArray(){const t=this.bb.__offset(this.bb_pos,40);return t?new Int32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startFragmentsGroup(t){t.startObject(19)}static addItems(t,e){t.addFieldOffset(0,e,0)}static createItemsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startItemsVector(t,e){t.startVector(4,e,4)}static addCivil(t,e){t.addFieldOffset(1,e,0)}static addCoordinationMatrix(t,e){t.addFieldOffset(2,e,0)}static createCoordinationMatrixVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startCoordinationMatrixVector(t,e){t.startVector(4,e,4)}static addIds(t,e){t.addFieldOffset(3,e,0)}static createIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIdsVector(t,e){t.startVector(4,e,4)}static addItemsKeys(t,e){t.addFieldOffset(4,e,0)}static createItemsKeysVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsKeysVector(t,e){t.startVector(4,e,4)}static addItemsKeysIndices(t,e){t.addFieldOffset(5,e,0)}static createItemsKeysIndicesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsKeysIndicesVector(t,e){t.startVector(4,e,4)}static addItemsRels(t,e){t.addFieldOffset(6,e,0)}static createItemsRelsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsRelsVector(t,e){t.startVector(4,e,4)}static addItemsRelsIndices(t,e){t.addFieldOffset(7,e,0)}static createItemsRelsIndicesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startItemsRelsIndicesVector(t,e){t.startVector(4,e,4)}static addFragmentKeys(t,e){t.addFieldOffset(8,e,0)}static addGlobalIds(t,e){t.addFieldOffset(9,e,0)}static addId(t,e){t.addFieldOffset(10,e,0)}static addName(t,e){t.addFieldOffset(11,e,0)}static addIfcName(t,e){t.addFieldOffset(12,e,0)}static addIfcDescription(t,e){t.addFieldOffset(13,e,0)}static addIfcSchema(t,e){t.addFieldOffset(14,e,0)}static addMaxExpressId(t,e){t.addFieldInt32(15,e,0)}static addBoundingBox(t,e){t.addFieldOffset(16,e,0)}static createBoundingBoxVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startBoundingBoxVector(t,e){t.startVector(4,e,4)}static addOpaqueGeometriesIds(t,e){t.addFieldOffset(17,e,0)}static createOpaqueGeometriesIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startOpaqueGeometriesIdsVector(t,e){t.startVector(4,e,4)}static addTransparentGeometriesIds(t,e){t.addFieldOffset(18,e,0)}static createTransparentGeometriesIdsVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startTransparentGeometriesIdsVector(t,e){t.startVector(4,e,4)}static endFragmentsGroup(t){return t.endObject()}static finishFragmentsGroupBuffer(t,e){t.finish(e)}static finishSizePrefixedFragmentsGroupBuffer(t,e){t.finish(e,void 0,!0)}};class A_{constructor(){W(this,"version",2),W(this,"separator","|")}import(t){const e=new Sn(t),i=Fr.getRootAsFragmentsGroup(e),r=this.constructFragmentGroup(i),s=i.itemsLength();for(let a=0;a<s;a++){const o=i.items(a);if(!o)continue;const l=this.constructGeometry(o),f=this.constructMaterials(o),p=o.capacity(),h=new Da(l,f,p);h.capacityOffset=o.capacityOffset(),this.setInstances(o,h),this.setID(o,h),r.items.push(h),r.add(h.mesh)}return r}export(t){const e=new pi(1024),i=[],r=Fr,s=ce;let a=null;if(t.civilData){const dt=[],O=Be,Z=Ye;for(const[rt,st]of t.civilData.alignments){const{absolute:ct,horizontal:Ct,vertical:Nt}=st,Rt=this.saveCivilCurves(Ct,e),P=this.saveCivilCurves(Nt,e),jt=this.saveCivilCurves(ct,e),It=O.createHorizontalVector(e,Rt),Ft=O.createVerticalVector(e,P),Mt=O.createAbsoluteVector(e,jt);O.startAlignment(e),O.addHorizontal(e,It),O.addVertical(e,Ft),O.addAbsolute(e,Mt),O.addInitialPk(e,st.initialKP);const $t=O.endAlignment(e);dt.push($t)}const et=Z.createAlignmentsVector(e,dt),J=Z.createCoordinationMatrixVector(e,t.coordinationMatrix.elements);Z.startCivilData(e),Z.addAlignments(e,et),Z.addCoordinationMatrix(e,J),a=Z.endCivilData(e)}for(const dt of t.items){const O=dt.exportData(),Z=[];for(const Ft of dt.ids){const Mt=dt.getInstancesIDs(Ft);if(!Mt)throw new Error("Instances not found!");Z.push(Mt.size)}const et=s.createPositionVector(e,O.position),J=s.createNormalVector(e,O.normal),rt=s.createIndexVector(e,O.index),st=s.createGroupsVector(e,O.groups),ct=s.createMaterialsVector(e,O.materials),Ct=s.createMatricesVector(e,O.matrices),Nt=s.createColorsVector(e,O.colors),Rt=s.createIdsVector(e,O.ids),P=s.createItemsSizeVector(e,Z),jt=e.createString(O.id);s.startFragment(e),s.addPosition(e,et),s.addNormal(e,J),s.addIndex(e,rt),s.addGroups(e,st),s.addMaterials(e,ct),s.addMatrices(e,Ct),s.addColors(e,Nt),s.addIds(e,Rt),s.addItemsSize(e,P),s.addId(e,jt),s.addCapacity(e,dt.capacity),s.addCapacityOffset(e,dt.capacityOffset);const It=ce.endFragment(e);i.push(It)}const o=r.createItemsVector(e,i),l=r.createCoordinationMatrixVector(e,t.coordinationMatrix.elements);let f="";for(const dt of t.keyFragments.values())f.length&&(f+=this.separator),f+=dt;let p="";for(const[dt]of t.globalToExpressIDs)p.length&&(p+=this.separator),p+=dt;const h=e.createString(f),u=e.createString(p),_=[],M=[],S=[],d=[],c=[];let T=0,x=0;for(const[dt,[O,Z]]of t.data){_.push(T),S.push(x),c.push(dt);for(const et of O)M.push(et);for(const et of Z)d.push(et);T+=O.length,x+=Z.length}const g=[],I=[];for(const[dt,O]of t.geometryIDs.opaque)g.push(dt,O);for(const[dt,O]of t.geometryIDs.transparent)I.push(dt,O);const w=e.createString(t.uuid),A=e.createString(t.name),C=e.createString(t.ifcMetadata.name),b=e.createString(t.ifcMetadata.description),m=e.createString(t.ifcMetadata.schema),y=r.createItemsKeysIndicesVector(e,_),U=r.createItemsKeysVector(e,M),D=r.createItemsRelsIndicesVector(e,S),B=r.createItemsRelsVector(e,d),q=r.createIdsVector(e,c),G=r.createOpaqueGeometriesIdsVector(e,g),Y=r.createTransparentGeometriesIdsVector(e,I),{min:k,max:lt}=t.boundingBox,ht=[k.x,k.y,k.z,lt.x,lt.y,lt.z],ft=r.createBoundingBoxVector(e,ht);r.startFragmentsGroup(e),r.addId(e,w),r.addName(e,A),r.addIfcName(e,C),r.addIfcDescription(e,b),r.addIfcSchema(e,m),r.addMaxExpressId(e,t.ifcMetadata.maxExpressID),r.addItems(e,o),r.addFragmentKeys(e,h),r.addGlobalIds(e,u),r.addIds(e,q),r.addItemsKeysIndices(e,y),r.addItemsKeys(e,U),r.addItemsRelsIndices(e,D),r.addItemsRels(e,B),r.addCoordinationMatrix(e,l),r.addBoundingBox(e,ft),r.addOpaqueGeometriesIds(e,G),r.addTransparentGeometriesIds(e,Y),a!==null&&r.addCivil(e,a);const at=Fr.endFragmentsGroup(e);return e.finish(at),e.asUint8Array()}setID(t,e){const i=t.id();i&&(e.id=i,e.mesh.uuid=i)}setInstances(t,e){const i=t.matricesArray(),r=t.colorsArray(),s=t.idsArray(),a=t.itemsSizeArray();if(!i||!s||!a)throw new Error("Error: Can't load empty fragment!");const o=[];let l=0;for(let f=0;f<a.length;f++){const p=s[f],h=a[f],u=[],_=[];for(let S=0;S<h;S++){const d=16*l,c=i.subarray(d,d+17),T=new qt().fromArray(c);if(u.push(T),r){const x=3*l,[g,I,w]=r.subarray(x,x+4),A=new Gt(g,I,w);_.push(A)}l++}const M=_.length?_:void 0;o.push({id:p,transforms:u,colors:M})}e.add(o)}constructMaterials(t){const e=t.materialsArray(),i=[];if(!e)return i;for(let r=0;r<e.length;r+=5){const s=e[r],a=!!e[r+1],o=e[r+2],l=e[r+3],f=e[r+4],p=new Gt(o,l,f),h=new ma({color:p,opacity:s,transparent:a});i.push(h)}return i}constructFragmentGroup(t){const e=new Oa,i=t.civil();if(i){const C=i.coordinationMatrixArray(),b=new qt;C&&b.fromArray(C),e.civilData={alignments:new Map,coordinationMatrix:b};const m=i.alignmentsLength();for(let y=0;y<m;y++){const U=new ga({color:16777215}),D=new Ba,B=i.alignments(y);if(!B)throw new Error("Alignment not found!");const q=B.horizontalLength();D.horizontal=this.constructCivilCurves(B,D,"horizontal",q,U);const G=B.verticalLength();D.vertical=this.constructCivilCurves(B,D,"vertical",G,U);const Y=B.horizontalLength();D.absolute=this.constructCivilCurves(B,D,"absolute",Y,U),D.initialKP=B.initialPk(),e.civilData.alignments.set(y,D)}}e.uuid=t.id()||e.uuid,e.name=t.name()||"",e.ifcMetadata={name:t.ifcName()||"",description:t.ifcDescription()||"",schema:t.ifcSchema()||"IFC2X3",maxExpressID:t.maxExpressId()||0};const r=new qt().elements,s=t.coordinationMatrixArray()||r,a=t.idsArray()||new Uint32Array,o=t.itemsKeysIndicesArray()||new Uint32Array,l=t.itemsKeysArray()||new Uint32Array,f=t.itemsRelsArray()||new Uint32Array,p=t.itemsRelsIndicesArray()||new Uint32Array,h=(t.fragmentKeys()||"").split(this.separator),u=(t.globalIds()||"").split(this.separator);this.setGroupData(e,a,o,l,0),this.setGroupData(e,a,p,f,1);const _=t.opaqueGeometriesIdsArray()||new Uint32Array,M=t.transparentGeometriesIdsArray()||new Uint32Array,S=new Map;for(let C=0;C<_.length-1;C+=2){const b=_[C],m=_[C+1];S.set(b,m)}const d=new Map;for(let C=0;C<M.length-1;C+=2){const b=M[C],m=M[C+1];d.set(b,m)}e.geometryIDs={opaque:S,transparent:d};const c=t.boundingBoxArray()||[0,0,0,0,0,0],[T,x,g,I,w,A]=c;e.boundingBox.min.set(T,x,g),e.boundingBox.max.set(I,w,A);for(let C=0;C<h.length;C++)e.keyFragments.set(C,h[C]);s.length===16&&e.coordinationMatrix.fromArray(s);for(let C=0;C<a.length;C++)e.globalToExpressIDs.set(u[C],a[C]);return e}setGroupData(t,e,i,r,s){for(let a=0;a<i.length;a++){const o=e[a],l=i[a],f=i[a+1],p=f===void 0?r.length:f,h=[];for(let _=l;_<p;_++)h.push(r[_]);t.data.has(o)||t.data.set(o,[[],[]]);const u=t.data.get(o);u&&(u[s]=h)}}constructGeometry(t){const e=t.positionArray()||new Float32Array,i=t.normalArray()||new Float32Array,r=t.indexArray(),s=t.groupsArray();if(!r)throw new Error("Index not found!");const a=new kn;if(a.setIndex(Array.from(r)),a.setAttribute("position",new Le(e,3)),a.setAttribute("normal",new Le(i,3)),s)for(let o=0;o<s.length;o+=3){const l=s[o],f=s[o+1],p=s[o+2];a.addGroup(l,f,p)}return a}constructCivilCurves(t,e,i,r,s){const a=[];for(let o=0;o<r;o++){const l=t[i](o);if(!l)throw new Error("Curve not found!");const f=l.pointsArray();if(f===null)throw new Error("Curve points not found!");let p={};const h=l.data();h&&(p=JSON.parse(h));const u=new ba,_=new Le(f,3);u.setAttribute("position",_);const M=[];for(let d=0;d<f.length/3-1;d++)M.push(d,d+1);u.setIndex(M);const S=new Va(o,p,e,u,s);a.push(S.curve)}return a}saveCivilCurves(t,e){const i=Zi,r=[];for(const s of t){const a=s.mesh.geometry.attributes.position.array,o=i.createPointsVector(e,a),l=e.createString(JSON.stringify(s.data));i.startCivilCurve(e),i.addPoints(e,o),i.addData(e,l);const f=i.endCivilCurve(e);r.push(f)}return r}}class P_{constructor(){W(this,"parsers",[new A_,new T_]),W(this,"version","auto")}import(t){const e=this.parsers.length;if(this.version==="auto"){for(let s=0;s<this.parsers.length;s++){const a=this.parsers[s].import(t);if(Object.keys(a).length!==0){if(s!==0){const o=this.parsers.length-s;this.warnVersion(o,e)}return a}}throw new Error("No valid parser found for this file")}this.checkCurrentVersionValid(this.version);const i=this.parsers.length-this.version,r=this.parsers[i].import(t);if(Object.keys(r).length===0)throw new Error(`The given version ${this.version} doesn't match to the given file. Try using "auto" in the version property to handle versions automatically.`);return r}export(t){if(this.version==="auto")return this.parsers[0].export(t);this.checkCurrentVersionValid(this.version);const e=this.parsers.length-this.version;return this.parsers[e].export(t)}checkCurrentVersionValid(t){if(this.version!=="auto"){if(this.version!==t&&this.warnVersion(this.version,t),!Number.isInteger(this.version))throw new Error("Invalid version. Non-automatic versions must an integer.");if(this.version<1||this.version>t)throw new Error(`Invalid version. Versions range from 1 to ${t}.`)}}warnVersion(t,e){console.warn(`This fragment file version is ${t}. The latest version is ${e}. To avoid issues, please consider updating your fragments. You can do so by regenerating your fragments from the original IFC file.`)}}class y_{constructor(t){W(this,"baseDirectory"),W(this,"maxDeadTime",6e4),W(this,"mode","buffer"),W(this,"_memoryCleanTime",1e4),W(this,"_intervalID",null),W(this,"_isCleaningMemory",!1),W(this,"cleanMemory",async()=>{if(this._isCleaningMemory)return;this._isCleaningMemory=!0;const e=await this.getDir(this.baseDirectory),i=new Set,r=new Date().getTime();for await(const s of e.values()){const a=localStorage.getItem(s.name)||"0";r-parseInt(a,10)>this.maxDeadTime&&(i.add(s.name),localStorage.removeItem(s.name))}for(const s of i)e.removeEntry(s);this._isCleaningMemory=!1}),this.baseDirectory=t,this.setupMemoryCleanup()}get memoryCleanTime(){return this._memoryCleanTime}set memoryCleanTime(t){this._memoryCleanTime=t,this.dispose(),this.setupMemoryCleanup()}isCached(t){const e=this.encodeName(t);return localStorage.getItem(e)!==null}async get(t){const e=this.encodeName(t),i=await this.getDir(this.baseDirectory);try{const r=await i.getFileHandle(e),s=await r.getFile();return this.updateLastAccessTime(e),s}catch{return null}}async add(t,e){const i=this.encodeName(t),r=await this.getDir(this.baseDirectory),s=await r.getFileHandle(i,{create:!0}),a=await s.createWritable();await a.write(e),await a.close(),this.updateLastAccessTime(i)}async clear(){const t=await this.getDir(this.baseDirectory);for await(const[e]of t.entries())await t.removeEntry(e)}dispose(){this._intervalID!==null&&window.clearInterval(this._intervalID)}setupMemoryCleanup(){this._intervalID=window.setInterval(this.cleanMemory,this.memoryCleanTime)}async getDir(t){return(await navigator.storage.getDirectory()).getDirectoryHandle(t,{create:!0})}encodeName(t){return t.replace(/[\\/:*?"<>|]/g,"ñ")}updateLastAccessTime(t){const e=new Date().getTime().toString();localStorage.setItem(t,e)}}const pn=class ge extends gl{constructor(){super(...arguments),W(this,"items",[]),W(this,"boundingBox",new xe),W(this,"coordinationMatrix",new qt),W(this,"keyFragments",new Map),W(this,"globalToExpressIDs",new Map),W(this,"data",new Map),W(this,"geometryIDs",{opaque:new Map,transparent:new Map}),W(this,"ifcMetadata",{name:"",description:"",schema:"IFC2X3",maxExpressID:0}),W(this,"civilData"),W(this,"streamSettings",{baseFileName:"",ids:new Map,types:new Map}),W(this,"isStreamed",!1),W(this,"_properties")}get hasProperties(){const t=this._properties!==void 0,e=this.streamSettings.ids.size!==0;return t||e}getFragmentMap(t=this.data.keys()){const e={};for(const i of t){const r=this.data.get(i);if(r)for(const s of r[0]){const a=this.keyFragments.get(s);a!==void 0&&(e[a]||(e[a]=new Set),e[a].add(i))}}return e}getItemVertices(t){const e=[],i=this.getFragmentMap([t]);for(const r in i){const s=this.items.find(o=>o.id===r);if(!s)continue;const a=s.getInstancesIDs(t);if(a)for(const o of a){const l=new qt;s.mesh.getMatrixAt(o,l);for(const f of s.uniqueVertices){const p=f.clone().applyMatrix4(l);e.push(p)}}}return e}static setPropertiesDB(t){t?ge.propertiesDB||(ge.propertiesDB=new y_("that-open-company-streaming-properties")):t||ge.propertiesDB&&ge.propertiesDB.dispose()}dispose(t=!0){for(const e of this.items)e.dispose(t);if(this.coordinationMatrix=new qt,this.keyFragments.clear(),this.data.clear(),this._properties={},this.removeFromParent(),this.items=[],this.civilData){const{alignments:e}=this.civilData;for(const[i,r]of e)this.disposeAlignment(r.vertical),this.disposeAlignment(r.horizontal),this.disposeAlignment(r.absolute)}this.civilData=void 0}setLocalProperties(t){this._properties=t}getLocalProperties(){return this._properties}getAllPropertiesIDs(){return this._properties?Object.keys(this._properties).map(t=>parseInt(t,10)):Array.from(this.streamSettings.ids.keys())}getAllPropertiesTypes(){if(this._properties){const t=new Set;for(const e in this._properties){const i=this._properties[e];i.type!==void 0&&t.add(i.type)}return Array.from(t)}return Array.from(this.streamSettings.types.keys())}async getProperties(t){if(this._properties)return this._properties[t]||null;const e=this.getPropsURL(t),i=await this.getPropertiesData(e);return i?i[t]:null}async setProperties(t,e){if(!this._properties)throw new Error("Writing streamed properties not supported yet!");e!==null?this._properties[t]=e:delete this._properties[t]}async getAllPropertiesOfType(t){if(this._properties){const s={};let a=!1;for(const o in this._properties){const l=this._properties[o];l.type===t&&(s[l.expressID]=l,a=!0)}return a?s:null}const{types:e}=this.streamSettings,i=e.get(t);if(i===void 0)return null;const r={};for(const s of i){const a=this.constructFileName(s),o=await this.getPropertiesData(a);for(const l in o)r[parseInt(l,10)]=o[l]}return r}clone(t){throw new Error("Use FragmentsGroup.cloneGroup instead!")}cloneGroup(t){const e=new ge;e.coordinationMatrix=this.coordinationMatrix,e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale),e.updateMatrix(),e.ifcMetadata={...this.ifcMetadata},t||(t=this.getFragmentMap(this.data.keys()));const i=new Set,r=new Map;for(const s of this.items){if(!t[s.id])continue;const a=t[s.id],o=s.clone(a);r.set(s.id,o.id),e.items.push(o),e.add(o.mesh);for(const l of a)i.add(l)}for(const s of i){const a=this.data.get(s);a&&e.data.set(s,a)}for(const[s,a]of this.keyFragments)if(r.has(a)){const o=r.get(a);if(o===void 0)throw new Error("Malformed fragment ID map during clone!");e.keyFragments.set(s,o)}for(const[s,a]of this.globalToExpressIDs)i.has(a)&&e.globalToExpressIDs.set(s,a);return this.civilData&&(e.civilData={coordinationMatrix:this.coordinationMatrix,alignments:new Map}),e}getPropsURL(t){const{ids:e}=this.streamSettings,i=e.get(t);if(i===void 0)throw new Error("ID not found");return this.constructFileName(i)}async getPropertiesData(t){var e;let i;if((e=this.streamSettings.baseUrl)!=null&&e.length&&(console.warn("streamSettings.baseUrl is deprecated. Use FragmentsGroup.url instead."),ge.url=this.streamSettings.baseUrl),ge.useCache){let r=null;if(ge.propertiesDB&&(r=await ge.propertiesDB.get(t)),r)i=await r.text();else if(i=await(await ge.fetch(t)).text(),ge.propertiesDB){const a=new TextEncoder().encode(i);await ge.propertiesDB.add(t,a)}}else i=await(await ge.fetch(t)).text();return JSON.parse(i)}constructFileName(t){if(ge.constructFileName)return ge.constructFileName(t);const{baseFileName:e}=this.streamSettings;return`${e}-${t}`}disposeAlignment(t){for(const e of t)if(e.mesh.geometry.dispose(),Array.isArray(e.mesh.material))for(const i of e.mesh.material)i.dispose();else e.mesh.material.dispose();t.length=0}};W(pn,"fetch",async n=>fetch(`${pn.url}${n}`)),W(pn,"constructFileName",null),W(pn,"url",""),W(pn,"useCache",!0),W(pn,"propertiesDB",null);let Oa=pn;class Ba{constructor(){W(this,"vertical",[]),W(this,"horizontal",[]),W(this,"absolute",[]),W(this,"initialKP",0)}getLength(t){let e=0;for(const i of this[t])e+=i.getLength();return e}getPointAt(t,e){const i=this.getCurveAt(t,e);return i.curve.getPointAt(i.percentage)}getPercentageAt(t,e,i=.01){const r=this[e];let s=0;for(const a of r){const o=a.getPercentageAt(t,i),l=a.getLength();if(o!==null)return(s+o*l)/this.getLength(e);s+=l}return null}getCurveAt(t,e){t<0?t=0:t>1&&(t=1);const i=this[e],r=this.getLength(e)*t;let s=0;for(const a of i){const o=a.getLength();if(s+o>=r)return{curve:a,percentage:(r-s)/o};s+=o}throw new Error("Could not compute point!")}}class w_{constructor(t,e,i,r){W(this,"index"),W(this,"mesh"),W(this,"data"),W(this,"alignment"),this.index=t,this.mesh=e,this.data=i,this.alignment=r}get _index(){return this.mesh.geometry.index}get _pos(){return this.mesh.geometry.attributes.position.array}getLength(){let t=0;for(let e=0;e<this._index.array.length-1;e+=2){const{startPoint:i,endPoint:r}=this.getSegment(e);t+=i.distanceTo(r)}return t}getPointAt(t){const{startPoint:e,endPoint:i,distanceToStart:r}=this.getSegmentAt(t),s=i.clone();return s.sub(e),s.normalize(),s.multiplyScalar(r),s.add(e),s}getSegmentAt(t){t<0?t=0:t>1&&(t=1);const e=this.getLength()*t;let i=0;for(let r=0;r<this._index.array.length-1;r+=2){const{startPoint:s,endPoint:a}=this.getSegment(r),o=s.distanceTo(a);if(i+o>=e)return{distanceToStart:e-i,index:r,startPoint:s,endPoint:a};i+=o}throw new Error("Could not compute point")}getPercentageAt(t,e=.01){let i=0;for(let r=0;r<this._index.array.length-1;r+=2){const{startPoint:s,endPoint:a}=this.getSegment(r),o=s.distanceTo(a),l=t.distanceTo(s);if(l+t.distanceTo(a)-o<=e)return(i+l)/this.getLength();i+=o}return null}getSegment(t){const e=3*this._index.array[t],i=3*this._index.array[t+1];return{startPoint:new tt(this._pos[e],this._pos[e+1],this._pos[e+2]),endPoint:new tt(this._pos[i],this._pos[i+1],this._pos[i+2])}}}class Va extends bl{constructor(t,e,i,r,s){super(r,s),W(this,"curve"),this.curve=new w_(t,this,e,i)}}class Ve{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStreamedGeometry(t,e){return(e||new Ve).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStreamedGeometry(t,e){return t.setPosition(t.position()+4),(e||new Ve).__init(t.readInt32(t.position())+t.position(),t)}geometryId(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.readUint32(this.bb_pos+t):0}position(t){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}positionLength(){const t=this.bb.__offset(this.bb_pos,6);return t?this.bb.__vector_len(this.bb_pos+t):0}positionArray(){const t=this.bb.__offset(this.bb_pos,6);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}normal(t){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb.__vector(this.bb_pos+e)+4*t):0}normalLength(){const t=this.bb.__offset(this.bb_pos,8);return t?this.bb.__vector_len(this.bb_pos+t):0}normalArray(){const t=this.bb.__offset(this.bb_pos,8);return t?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}index(t){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readUint32(this.bb.__vector(this.bb_pos+e)+4*t):0}indexLength(){const t=this.bb.__offset(this.bb_pos,10);return t?this.bb.__vector_len(this.bb_pos+t):0}indexArray(){const t=this.bb.__offset(this.bb_pos,10);return t?new Uint32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+t),this.bb.__vector_len(this.bb_pos+t)):null}static startStreamedGeometry(t){t.startObject(4)}static addGeometryId(t,e){t.addFieldInt32(0,e,0)}static addPosition(t,e){t.addFieldOffset(1,e,0)}static createPositionVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startPositionVector(t,e){t.startVector(4,e,4)}static addNormal(t,e){t.addFieldOffset(2,e,0)}static createNormalVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addFloat32(e[i]);return t.endVector()}static startNormalVector(t,e){t.startVector(4,e,4)}static addIndex(t,e){t.addFieldOffset(3,e,0)}static createIndexVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addInt32(e[i]);return t.endVector()}static startIndexVector(t,e){t.startVector(4,e,4)}static endStreamedGeometry(t){return t.endObject()}static createStreamedGeometry(t,e,i,r,s){return Ve.startStreamedGeometry(t),Ve.addGeometryId(t,e),Ve.addPosition(t,i),Ve.addNormal(t,r),Ve.addIndex(t,s),Ve.endStreamedGeometry(t)}}class en{constructor(){W(this,"bb",null),W(this,"bb_pos",0)}__init(t,e){return this.bb_pos=t,this.bb=e,this}static getRootAsStreamedGeometries(t,e){return(e||new en).__init(t.readInt32(t.position())+t.position(),t)}static getSizePrefixedRootAsStreamedGeometries(t,e){return t.setPosition(t.position()+4),(e||new en).__init(t.readInt32(t.position())+t.position(),t)}geometries(t,e){const i=this.bb.__offset(this.bb_pos,4);return i?(e||new Ve).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+4*t),this.bb):null}geometriesLength(){const t=this.bb.__offset(this.bb_pos,4);return t?this.bb.__vector_len(this.bb_pos+t):0}static startStreamedGeometries(t){t.startObject(1)}static addGeometries(t,e){t.addFieldOffset(0,e,0)}static createGeometriesVector(t,e){t.startVector(4,e.length,4);for(let i=e.length-1;i>=0;i--)t.addOffset(e[i]);return t.endVector()}static startGeometriesVector(t,e){t.startVector(4,e,4)}static endStreamedGeometries(t){return t.endObject()}static finishStreamedGeometriesBuffer(t,e){t.finish(e)}static finishSizePrefixedStreamedGeometriesBuffer(t,e){t.finish(e,void 0,!0)}static createStreamedGeometries(t,e){return en.startStreamedGeometries(t),en.addGeometries(t,e),en.endStreamedGeometries(t)}}class U_{import(t){const e=new Sn(t),i=en.getRootAsStreamedGeometries(e),r=new Map,s=i.geometriesLength();for(let a=0;a<s;a++){const o=i.geometries(a);if(!o)continue;const l=o.geometryId();if(l===null)throw new Error("Error finding ID!");const f=o.positionArray(),p=o.normalArray(),h=o.indexArray();f&&p&&h&&r.set(l,{position:f,normal:p,index:h})}return r}export(t){const e=new pi(1024),i=[],r=en,s=Ve;for(const[l,{index:f,position:p,normal:h}]of t){const u=s.createIndexVector(e,f),_=s.createPositionVector(e,p),M=s.createNormalVector(e,h);s.startStreamedGeometry(e),s.addGeometryId(e,l),s.addIndex(e,u),s.addPosition(e,_),s.addNormal(e,M);const S=s.endStreamedGeometry(e);i.push(S)}const a=r.createGeometriesVector(e,i);r.startStreamedGeometries(e),r.addGeometries(e,a);const o=r.endStreamedGeometries(e);return e.finish(o),e.asUint8Array()}}class D_{static combine(t){if(t.length===0)return{};if(t.length===1)return t[0];const e={};for(const i of t)for(const r in i){e[r]||(e[r]=new Set);for(const s of i[r])e[r].add(s)}return e}static intersect(t){if(t.length===0)return{};if(t.length===1)return t[0];const e=new Map;let i=0;for(const s of t){i++;for(const a in s){e.has(a)||e.set(a,{count:0,ids:new Map});const o=e.get(a);o.count++;for(const l of s[a]){const f=o.ids.get(l)||0;o.ids.set(l,f+1)}}}const r={};for(const[s,{count:a,ids:o}]of e)if(a===i)for(const[l,f]of o)f===i&&(r[s]||(r[s]=new Set),r[s].add(l));return r}static copy(t){const e={};for(const i in t)e[i]=new Set(t[i]);return e}static export(t){const e={};for(const i in t)e[i]=Array.from(t[i]);return e}static import(t){const e={};for(const i in t)e[i]=new Set(t[i]);return e}}export{Ba as B,U_ as H,P_ as M,He as S,Da as T,ot as U,Oa as V,D_ as W,I_ as a,y_ as b,No as q,Va as z};
//# sourceMappingURL=index3.js.map
