/**
 * @namespace Low-level Graphics API
 * @name pc.gfx
 */
pc.gfx = {
    /**
     * @enum pc.gfx.CLEARFLAG
     * @name pc.gfx.CLEARFLAG_COLOR
     * @description Clear the color buffer
     */
    CLEARFLAG_COLOR: 1,
    /**
     * @enum pc.gfx.CLEARFLAG
     * @name pc.gfx.CLEARFLAG_DEPTH
     * @description Clear the depth buffer
     */
    CLEARFLAG_DEPTH: 2,
    /**
     * @enum pc.gfx.CLEARFLAG
     * @name pc.gfx.CLEARFLAG_STENCIL
     * @description Clear the stencil buffer
     */
    CLEARFLAG_STENCIL: 4,


    /**
     * @enum pc.gfx.TEXTURELOCK
     * @name pc.gfx.TEXTURELOCK_READ
     * @description Read only. Any changes to the locked mip level's pixels will not update the texture.
     */
    TEXTURELOCK_READ: 1,
    /**
     * @enum pc.gfx.TEXTURELOCK
     * @name pc.gfx.TEXTURELOCK_WRITE
     * @description Write only. The contents of the specified mip level will be entirely replaced.
     */
    TEXTURELOCK_WRITE: 2,


    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_A8
     * @description 8-bit alpha.
     */
    PIXELFORMAT_A8: 0,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_L8
     * @description 8-bit luminance.
     */
    PIXELFORMAT_L8: 1,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_L8_A8
     * @description 8-bit luminance with 8-bit alpha.
     */
    PIXELFORMAT_L8_A8: 2,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_R5_G6_B5
     * @description 16-bit RGB (5-bits for red channel, 6 for green and 5 for blue).
     */
    PIXELFORMAT_R5_G6_B5: 3,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_R5_G5_B5_A1
     * @description 16-bit RGBA (5-bits for red channel, 5 for green, 5 for blue with 1-bit alpha).
     */
    PIXELFORMAT_R5_G5_B5_A1: 4,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_R4_G4_B4_A4
     * @description 16-bit RGBA (4-bits for red channel, 4 for green, 4 for blue with 4-bit alpha).
     */
    PIXELFORMAT_R4_G4_B4_A4: 5,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_R8_G8_B8
     * @description 24-bit RGB (8-bits for red channel, 8 for green and 8 for blue).
     */
    PIXELFORMAT_R8_G8_B8: 6,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_R8_G8_B8_A8
     * @description 32-bit RGBA (8-bits for red channel, 8 for green, 8 for blue with 8-bit alpha).
     */
    PIXELFORMAT_R8_G8_B8_A8: 7,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_DXT1
     * @description Block compressed format, storing 16 input pixels in 64 bits of output, consisting of two 16-bit RGB 5:6:5 color values and a 4x4 two bit lookup table.
     */
    PIXELFORMAT_DXT1: 8,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_DXT3
     * @description Block compressed format, storing 16 input pixels (corresponding to a 4x4 pixel block) into 128 bits of output, consisting of 64 bits of alpha channel data (4 bits for each pixel) followed by 64 bits of color data, encoded the same way as DXT1.
     */
    PIXELFORMAT_DXT3: 9,
    /**
     * @enum pc.gfx.PIXELFORMAT
     * @name pc.gfx.PIXELFORMAT_DXT5
     * @description Block compressed format, storing 16 input pixels into 128 bits of output, consisting of 64 bits of alpha channel data (two 8 bit alpha values and a 4x4 3 bit lookup table) followed by 64 bits of color data (encoded the same way as DXT1).
     */
    PIXELFORMAT_DXT5: 10,


    /**
     * @enum pc.gfx.ADDRESS
     * @name pc.gfx.ADDRESS_REPEAT
     * @description Ignores the integer part of texture coordinates, using only the fractional part.
     */
    ADDRESS_REPEAT: 0,
    /**
     * @enum pc.gfx.ADDRESS
     * @name pc.gfx.ADDRESS_CLAMP_TO_EDGE
     * @description Clamps texture coordinate to the range 0 to 1.
     */
    ADDRESS_CLAMP_TO_EDGE: 1,
    /**
     * @enum pc.gfx.ADDRESS
     * @name pc.gfx.ADDRESS_MIRRORED_REPEAT
     * @description Texture coordinate to be set to the fractional part if the integer part is even; if the integer part is odd,
     * then the texture coordinate is set to 1 minus the fractional part.
     */
    ADDRESS_MIRRORED_REPEAT: 2,


    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_NEAREST
     * @description Point sample filtering.
     */
    FILTER_NEAREST: 0,
    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_LINEAR
     * @description Bilinear filtering.
     */
    FILTER_LINEAR: 1,
    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_NEAREST_MIPMAP_NEAREST
     * @description Use the nearest neighbor in the nearest mipmap level.
     */
    FILTER_NEAREST_MIPMAP_NEAREST: 2,
    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_NEAREST_MIPMAP_LINEAR
     * @description Linearly interpolate in the nearest mipmap level.
     */
    FILTER_NEAREST_MIPMAP_LINEAR: 3,
    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_LINEAR_MIPMAP_NEAREST
     * @description Use the nearest neighbor after linearly interpolating between mipmap levels.
     */
    FILTER_LINEAR_MIPMAP_NEAREST: 4,
    /**
     * @enum pc.gfx.FILTER
     * @name pc.gfx.FILTER_LINEAR_MIPMAP_LINEAR
     * @description Linearly interpolate both the mipmap levels and between texels.
     */
    FILTER_LINEAR_MIPMAP_LINEAR: 5
};
