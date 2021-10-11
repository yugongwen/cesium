define(["exports","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./Matrix2-ccd5b911","./ComponentDatatype-93750d1a","./when-4bbc8319","./RuntimeError-346a3079","./EllipseGeometryLibrary-9dda9a85","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./IndexDatatype-b7d979a6"],function(e,c,m,f,h,y,t,b,A,_,g){"use strict";var x=new f.Cartesian3,s=new f.Cartesian3;var E=new m.BoundingSphere,v=new m.BoundingSphere;function M(e){var t=(e=y.defaultValue(e,y.defaultValue.EMPTY_OBJECT)).center,i=y.defaultValue(e.ellipsoid,f.Ellipsoid.WGS84),r=e.semiMajorAxis,a=e.semiMinorAxis,n=y.defaultValue(e.granularity,h.CesiumMath.RADIANS_PER_DEGREE),o=y.defaultValue(e.height,0),s=y.defaultValue(e.extrudedHeight,o);this._center=f.Cartesian3.clone(t),this._semiMajorAxis=r,this._semiMinorAxis=a,this._ellipsoid=f.Ellipsoid.clone(i),this._rotation=y.defaultValue(e.rotation,0),this._height=Math.max(s,o),this._granularity=n,this._extrudedHeight=Math.min(s,o),this._numberOfVerticalLines=Math.max(y.defaultValue(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}M.packedLength=f.Cartesian3.packedLength+f.Ellipsoid.packedLength+8,M.pack=function(e,t,i){return i=y.defaultValue(i,0),f.Cartesian3.pack(e._center,t,i),i+=f.Cartesian3.packedLength,f.Ellipsoid.pack(e._ellipsoid,t,i),i+=f.Ellipsoid.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._numberOfVerticalLines,t[i]=y.defaultValue(e._offsetAttribute,-1),t};var C=new f.Cartesian3,G=new f.Ellipsoid,L={center:C,ellipsoid:G,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};M.unpack=function(e,t,i){t=y.defaultValue(t,0);var r=f.Cartesian3.unpack(e,t,C);t+=f.Cartesian3.packedLength;var a=f.Ellipsoid.unpack(e,t,G);t+=f.Ellipsoid.packedLength;var n=e[t++],o=e[t++],s=e[t++],u=e[t++],l=e[t++],d=e[t++],p=e[t++],t=e[t];return y.defined(i)?(i._center=f.Cartesian3.clone(r,i._center),i._ellipsoid=f.Ellipsoid.clone(a,i._ellipsoid),i._semiMajorAxis=n,i._semiMinorAxis=o,i._rotation=s,i._height=u,i._granularity=l,i._extrudedHeight=d,i._numberOfVerticalLines=p,i._offsetAttribute=-1===t?void 0:t,i):(L.height=u,L.extrudedHeight=d,L.granularity=l,L.rotation=s,L.semiMajorAxis=n,L.semiMinorAxis=o,L.numberOfVerticalLines=p,L.offsetAttribute=-1===t?void 0:t,new M(L))},M.createGeometry=function(e){if(!(e._semiMajorAxis<=0||e._semiMinorAxis<=0)){var t=e._height,i=e._extrudedHeight,r=!h.CesiumMath.equalsEpsilon(t,i,0,h.CesiumMath.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);var a,t={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines};return r?(t.extrudedHeight=i,t.offsetAttribute=e._offsetAttribute,a=function(e){var t=e.center,i=e.ellipsoid,r=e.semiMajorAxis,a=f.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,x),e.height,x);E.center=f.Cartesian3.add(t,a,E.center),E.radius=r,a=f.Cartesian3.multiplyByScalar(i.geodeticSurfaceNormal(t,a),e.extrudedHeight,a),v.center=f.Cartesian3.add(t,a,v.center),v.radius=r;var t=b.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,t=(a=new _.GeometryAttributes({position:new A.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b.EllipseGeometryLibrary.raisePositionsToHeight(t,e,!0)})})).position.values,r=m.BoundingSphere.union(E,v),n=t.length/3;y.defined(e.offsetAttribute)&&(o=new Uint8Array(n),o=e.offsetAttribute===c.GeometryOffsetAttribute.TOP?c.arrayFill(o,1,0,n/2):(t=e.offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1,c.arrayFill(o,t)),a.applyOffset=new A.GeometryAttribute({componentDatatype:h.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:o}));var o=y.defaultValue(e.numberOfVerticalLines,16),o=h.CesiumMath.clamp(o,0,n/2),s=g.IndexDatatype.createTypedArray(n,2*n+2*o);n/=2;var u=0;for(p=0;p<n;++p)s[u++]=p,s[u++]=(p+1)%n,s[u++]=p+n,s[u++]=(p+1)%n+n;if(0<o)for(var e=Math.min(o,n),l=Math.round(n/e),d=Math.min(l*o,n),p=0;p<d;p+=l)s[u++]=p,s[u++]=p+n;return{boundingSphere:r,attributes:a,indices:s}}(t)):(a=function(e){var t=e.center;s=f.Cartesian3.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,s),e.height,s),s=f.Cartesian3.add(t,s,s);for(var i=new m.BoundingSphere(s,e.semiMajorAxis),t=b.EllipseGeometryLibrary.computeEllipsePositions(e,!1,!0).outerPositions,e=new _.GeometryAttributes({position:new A.GeometryAttribute({componentDatatype:h.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:b.EllipseGeometryLibrary.raisePositionsToHeight(t,e,!1)})}),r=t.length/3,a=g.IndexDatatype.createTypedArray(r,2*r),n=0,o=0;o<r;++o)a[n++]=o,a[n++]=(o+1)%r;return{boundingSphere:i,attributes:e,indices:a}}(t),y.defined(e._offsetAttribute)&&(i=a.attributes.position.values.length,t=new Uint8Array(i/3),i=e._offsetAttribute===c.GeometryOffsetAttribute.NONE?0:1,c.arrayFill(t,i),a.attributes.applyOffset=new A.GeometryAttribute({componentDatatype:h.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:t}))),new A.Geometry({attributes:a.attributes,indices:a.indices,primitiveType:A.PrimitiveType.LINES,boundingSphere:a.boundingSphere,offsetAttribute:e._offsetAttribute})}},e.EllipseOutlineGeometry=M});
